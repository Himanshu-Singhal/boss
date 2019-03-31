import { Component, OnInit } from '@angular/core';
import { Goal } from '../../model/goal';
import { GoalsService } from '../../service/goals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private goalService: GoalsService ) { }
  
  goals: Goal[];

  getGoalsData(): void {
    this.goals = this.goalService.getGoalsData();
  }

  notificationVisible: boolean = true;

  hideNotification(): void {
    this.notificationVisible = false;
  }

  ngOnInit() {
    this.getGoalsData();
  }
}
