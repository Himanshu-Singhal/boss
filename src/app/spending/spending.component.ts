import { Component, OnInit } from '@angular/core';
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
      this.grouped = this.transactionService.groupTransactions(transactions);
    });
  }

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactionData();
  }
}
