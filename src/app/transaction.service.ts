import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getMonth(dateTime) {
    const monthNum = dateTime.split('-')[1];
    switch(monthNum) {
      case('0'):
        return 'January';
      case('1'):
        return 'February';
      case('2'):
        return 'March';
      case('3'):
        return 'April';
      case('4'):
        return 'May';
      case('5'):
        return 'June';
      case('6'):
        return 'July';
      case('7'):
        return 'August';
      case('8'):
        return 'September';
      case('9'):
        return 'October';
      case('10'):
        return 'November';
      case('11'):
        return 'December';
      default:
        return 'January'
    }
  };

  transactionOne: Transaction = {
    name: 'Coffee',
    description: 'Spent on coffee: $',
    amount: 298.7,
    timestamp: '2017-11-27T09:10:00'
  };

  transactionTwo: Transaction = {
    name: 'Commute',
    description: 'Spent on commute: $',
    amount: 534.7,
    timestamp: '2017-3-27T09:10:00'
  };

  getTransactionData(): Transaction[] {
    return [this.transactionOne , this.transactionTwo];
  }
}
