import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { getLocaleDateTimeFormat } from '@angular/common';
import { TransactionService } from '../transaction.service'

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent implements OnInit {
  
  transactions: Transaction[];

  getTransactionData(): void {
    this.transactionService.getTransactionData()
    .subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  getMonth(inp): string {
    return this.transactionService.getMonth(inp);
  }

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactionData();
  }

  allTransactions = [
    {
      title: 'January',
      transactions: [
        {
          name: 'Coffee',
          description: 'Spent on morning coffee: $',
          amount: 200
        },
        {
          name: 'Nails',
          description: 'Spent on manicure: $',
          amount: 100
        },
        {
          name: 'Transport',
          description: 'Spent on daily commute: $',
          amount: 300.9
        }
      ]
    },
    {
      title: 'February',
      transactions: [
        {
          name: 'Coffee',
          description: 'Spent on morning coffee: $',
          amount: 200
        },
        {
          name: 'Nails',
          description: 'Spent on manicure: $',
          amount: 100
        },
        {
          name: 'Transport',
          description: 'Spent on daily commute: $',
          amount: 300.9
        }
      ]
    },
    {
      title: 'March',
      transactions: [
        {
          name: 'Coffee',
          description: 'Spent on morning coffee: $',
          amount: 200
        },
        {
          name: 'Nails',
          description: 'Spent on manicure: $',
          amount: 100
        },
        {
          name: 'Transport',
          description: 'Spent on daily commute: $',
          amount: 300.9
        }
      ]
    }
  ];
}
