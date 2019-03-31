import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { NEWTRANSACTIONS } from './newTransactions';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  INITIAL_TRANSACTIONS: Transaction[] = [
    {
      name: 'Coffee',
      description: 'Spent on coffee: $',
      amount: 298.7,
      timestamp: '2019-03-14T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'Spent on coffee: $',
      amount: 123,
      timestamp: '2019-03-15T08:00:00Z'
    },
    {
      name: 'Commute',
      description: 'Spent on commute: $',
      amount: 534.7,
      timestamp: '2019-03-15T09:10:00Z'
    }
  ];

  private transactions = new BehaviorSubject(this.INITIAL_TRANSACTIONS);

  readonly transactions$ = this.transactions.asObservable();

  getMonth(dateTime) {
    const monthNum = dateTime.split('-')[1];
    switch (monthNum) {
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
        return 'January';
    }
  }

  fastForward(): void {
    this.transactions.next([...this.transactions.getValue(), ...NEWTRANSACTIONS]);
    console.log('fast forwarded');
  }

  getTransactionData(): Observable<Transaction[]> {
    return this.transactions$;
  }
}
