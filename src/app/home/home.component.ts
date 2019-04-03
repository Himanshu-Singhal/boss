import { Component, OnInit } from '@angular/core';
import { Goal } from '../../model/goal';
import { GoalsService } from '../../service/goals.service';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private goalService: GoalsService, private transactionService: TransactionService) { }

  goals: Goal[];
  notificationVisible: boolean;

  getGoalsData(): void {
    this.transactionService.getTransactionData().subscribe(transactions => {
      this.goals = this.goalService.getGoalsData(transactions);
    });
  }

  hideNotification(): void {
    this.notificationVisible = false;
  }

  ngOnInit() {
    this.notificationVisible = true;
    this.getGoalsData();
  }
}
