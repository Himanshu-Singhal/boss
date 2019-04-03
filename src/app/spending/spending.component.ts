import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})

export class SpendingComponent implements OnInit {
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
