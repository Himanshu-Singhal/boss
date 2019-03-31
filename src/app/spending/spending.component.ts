import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})

export class SpendingComponent implements OnInit {
  // transactions: Transaction[];
  grouped: { date: string; txns: Transaction[]; }[];

  getTransactionData(): void {
    this.transactionService.getTransactionData()
    .subscribe(transactions => {
      this.groupTransactions(transactions);
    });
  }

  groupTransactions(transactions): void {
    const txns = _(transactions).groupBy(txn => this.getDate(txn.timestamp))
                .map((value, key) => ({date: formatDate(key, 'MMMM dd, yyyy', 'en-US'), txns: value}))
                .value();
    this.grouped = _.orderBy(txns, 'date', 'desc');
  }

  getMonth(inp): string {
    return this.transactionService.getMonth(inp);
  }

  getDate(timestamp): string {
    const newDate = new Date(Date.parse(timestamp));
    return formatDate(newDate, 'MMMM dd, yyyy', 'en-US');
  }

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactionData();
  }
}
