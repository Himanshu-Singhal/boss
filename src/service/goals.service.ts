import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Transaction } from 'src/model/transaction';
import { Goal } from '../model/goal';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root'
})

export class GoalsService {

  constructor( private transactionService: TransactionService ) { }

  goalTypes: Array<string> = ['Coffee', 'Commute', 'Dine'];

  getGoalsData(transactions): Goal[] {
    const goals: Array<Goal> = [];
    const currMonth = this.transactionService.getLatestMonth(transactions);

    _.forEach(this.goalTypes, goalType => {
      const currTxns = this.transactionService.getMonthTxnsByType(transactions, goalType, currMonth);
      const prevTxns = this.transactionService.getMonthTxnsByType(transactions, goalType, currMonth - 1);
      const currTotal = _.map(currTxns, 'amount').reduce((a, b) => a + b, 0);
      const prevTotal = _.map(prevTxns, 'amount').reduce((a, b) => a + b, 0);
      const savings = this.getSavings(currMonth, currTotal, prevTotal);
      const state = 'Accepted';

      goals.push({
        type: goalType,
        title: this.getTitle(goalType),
        subtitle: this.getSubtitle(state, prevTotal, savings),
        state,
        progress: this.getProgress()
      });

    });
    return goals;
  }

  getTitle(type): string {
    switch (type) {
      case 'Coffee': return 'Spend $50 less on coffee this month.'; break;
      case 'Commute': return 'Walk to work every day.'; break;
      case 'Dine': return 'Dine out only on the weekends.'; break;
    }
  }

  getSubtitle(state, prevTotal, savings): string {
    if (state === 'Accepted') {
      return `You have saved $${savings} so far`;
    }
    return `Last month you spent $${prevTotal}.`;
  }

  getSavings(currMonth, currTotal, prevTotal): number {
    return 200;
  }

  getProgress(): number {
    return 40;
  }
}
