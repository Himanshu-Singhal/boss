import { Injectable } from '@angular/core';
import { Goal } from '../model/goal';
import { TransactionService } from './transaction.service';
import { Transaction } from 'src/model/transaction';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor( private transactionService: TransactionService ) { }

  transactionData: Transaction[];
  goals: Array<Goal> = [];

  getTransactionData(): void {
      this.transactionService.getTransactionData()
      .subscribe(transactions => {
        this.transactionData = transactions;
      });
  }

  getProgress(): number {
    return 40;
  }

  getTxnTypeByMonth(type, month): Transaction[] {
    return this.transactionService.getTxnTypeByMonth(type, month);
  }

  getGoalsData(): Goal[] {
        this.goals = [];
        this.getTransactionData();
        let lastTransactions = this.getTxnTypeByMonth('Coffee', 1);
        let groupedLastTransactions: Array<Transaction> = [];
        let currentTransactions = this.getTxnTypeByMonth('Coffee', 2);
        let groupedCurrentTransactions: Array<Transaction> = [];;
    
        lastTransactions.forEach((eachObj) => {
          if(groupedLastTransactions.find(grp => {return grp.name === eachObj.name})){
            (groupedLastTransactions.find(grp => {return grp.name === eachObj.name})).amount += eachObj.amount;
          }
          else {
            groupedLastTransactions.push({ name: eachObj.name, description: null, timestamp: null, amount: eachObj.amount});
          }
        });
    
        currentTransactions.forEach((eachObj) => {
          if(groupedCurrentTransactions.find(grp => {return grp.name === eachObj.name})){
            (groupedCurrentTransactions.find(grp => {return grp.name === eachObj.name})).amount += eachObj.amount;
          }
          else {
            groupedCurrentTransactions.push({ name: eachObj.name, description: null, timestamp: null, amount: eachObj.amount});
          }
        });
    
        groupedLastTransactions.forEach((grp) => {
           switch(grp.name) {
            case('Coffee'):
              this.goals.push(
                {
                  id: 'Coffee',
                  title: 'Spend $50 less on coffee this month.',
                  description: 'Last month youy spent: ',
                  last: grp.amount,
                  progress: 40
                }
              );
              break;
            case('Commute'):
              this.goals.push(
                {
                  id: 'Commute',
                  title: 'Walk to work every day.',
                  description: 'Last month you spent on commute: ',
                  last: grp.amount,
                  progress: 20
                }
              );
              break;
            case('Dine'):
              this.goals.push(
                {
                  id: 'Dine',
                  title: 'Dine out only on the weekends.',
                  description: 'You could save up to: ',
                  last: grp.amount,
                  progress: 30
                  }
              );
              break;
          }
        });
         return this.goals;
  }
}
