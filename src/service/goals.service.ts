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
    const currDate = this.transactionService.getLatestDate(transactions);
    const currMonth = currDate.getUTCMonth();
    let state = 'Accepted';

    _.forEach(this.goalTypes, goalType => {
      const currTxns = this.transactionService.getMonthTxnsByType(transactions, goalType, currMonth);
      const prevTxns = this.transactionService.getMonthTxnsByType(transactions, goalType, currMonth - 1);
      const currTotal = _.map(currTxns, 'amount').reduce((a, b) => a + b, 0);
      const prevTotal = _.map(prevTxns, 'amount').reduce((a, b) => a + b, 0);
      const savings = this.getSavings(currDate, currTotal, prevTotal);

      // Adding this to show Suggested Goal
      if (goalType === 'Dine') {
        state = 'Suggested';
      }

      goals.push({
        type: goalType,
        title: this.getTitle(goalType),
        subtitle: this.getSubtitle(state, prevTotal, savings),
        state,
        progress: this.getProgress(currDate, currTotal, prevTotal)
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

  getSavings(currDate, currTotal, prevTotal): number {
    // Current logic will always compare this month's current spending
    // vs previous month's spending only
    // Change this if given actual progress determination requirement

    // Use total days of currMonth for daily spending comparison to the previous month
    const currDays = new Date(currDate.getUTCFullYear(), currDate.getUTCMonth(), 0).getDate();
    const prevDaily = prevTotal / currDays;

    // Return prevDaily multiplied by latest transaction day minus the current total transaction
    return (prevDaily * currDate.getDate()) - currTotal;
  }

  getProgress(currDate, currTotal, prevTotal): number {
    // Current logic will always compare this month's current spending
    // vs previous month's spending only
    // Change this if given actual progress determination requirement

    // Use total days of currMonth for daily spending comparison to the previous month
    const currDays = new Date(currDate.getUTCFullYear(), currDate.getUTCMonth(), 0).getDate();
    const prevDaily = prevTotal / currDays;

    // Multiply current total by 100 (for percentage)
    // Then divide it by whatever the prevDaily was multiplied by the latest transaction day
    // If no prevDaily, default percentage to zero
    return prevDaily ? (currTotal * 100) / (prevDaily * currDate.getDate()) : 0;
  }
}
