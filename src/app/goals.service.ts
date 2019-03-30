import { Injectable } from '@angular/core';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor() { }

  goals: Goal[] = [
    {
    id: 'Coffee',
    title: 'Spend $50 less on coffee this month.',
    description: 'Last month youy spent: ',
    last: 153.00
    },
   {
    id: 'Dine',
    title: 'Dine out only on the weekends.',
    description: 'You could save up to: ',
    last: 332.00
    }
  ];

  getGoalsData(): Goal[] {
    return this.goals;
  }
}
