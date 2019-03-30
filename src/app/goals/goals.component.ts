import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';
import { Goal } from '../goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: Goal[];

  getGoalsData(): void {
    this.goals = this.GoalService.getGoalsData();
  }
  
  constructor(private GoalService: GoalsService) { }

  ngOnInit() {
    this.getGoalsData();
  }

}
