import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { NEWTRANSACTIONS } from '../app/newTransactions';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  INITIAL_TRANSACTIONS: Transaction[] = [
    {
      name: 'Coffee',
      description: 'TD UNLIMITED CHEQUING ACCT',
      amount: 298.7,
      timestamp: '2019-03-14T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'TD UNLIMITED CHEQUING ACCT',
      amount: 123,
      timestamp: '2019-03-27T08:00:00Z'
    },
    {
      name: 'Commute',
      description: 'TD SAVINGS ACCT',
      amount: 34.7,
      timestamp: '2019-03-15T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'TD CHEQUING ACCT',
      amount: 28.7,
      timestamp: '2019-01-14T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'TD UNLIMITED CHEQUING ACCT',
      amount: 538.7,
      timestamp: '2019-02-25T09:10:00Z'
    },
    {
      name: 'Commute',
      description: 'TD UNLIMITED CHEQUING ACCT',
      amount: 93.7,
      timestamp: '2019-02-19T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'TD SAVINGS ACCT',
      amount: 82.7,
      timestamp: '2019-01-14T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'TD UNLIMITED CHEQUING ACCT',
      amount: 7.7,
      timestamp: '2019-02-14T09:10:00Z'
    },
    {
      name: 'Coffee',
      description: 'TD UNLIMITED CHEQUING ACCT',
      amount: 17.7,
      timestamp: '2019-01-04T09:10:00Z'
    },
    {
      name: 'Commute',
      description: 'Spent on commute: $',
      amount: 34.7,
      timestamp: '2019-01-15T09:10:00Z'
    },
    {
      name: 'Dine',
      description: 'Spent on dining out: $',
      amount: 54.7,
      timestamp: '2019-03-09T09:10:00Z'
      }
  ];

  private transactions = new BehaviorSubject(this.INITIAL_TRANSACTIONS);

  readonly transactions$ = this.transactions.asObservable();

  getLatestDate(transactions): Date {
    const sorted = _.orderBy(transactions, 'timestamp', 'desc');
    return new Date(sorted[0].timestamp);
  }

  getDateString(timestamp): string {
    const newDate = new Date(Date.parse(timestamp));
    return formatDate(newDate, 'MMMM dd, yyyy', 'en-US');
  }

  fastForward(): void {
    this.transactions.next([...this.transactions.getValue(), ...NEWTRANSACTIONS]);
    console.log('fast forwarded');
  }

  getTransactionData(): Observable<Transaction[]> {
    return this.transactions$;
  }

  getTransactionsByMonth(month, transactions): Transaction[] {
    return _.filter(transactions, txn => new Date(txn.timestamp).getUTCMonth() === month);
  }

  getMonthTxnsByType(transactions, type, month): Transaction[] {
    return _.filter(transactions, txn => new Date(txn.timestamp).getUTCMonth() === month && txn.name === type);
  }

  groupTransactions(transactions): { date: any; txns: Transaction[]; }[] {
    const txns = _(transactions).orderBy('timestamp', 'desc').groupBy(txn => this.getDateString(txn.timestamp))
                .map((value, key) => ({date: formatDate(key, 'MMMM dd, yyyy', 'en-US'), txns: value}))
                .value();
    return txns;
  }
}
