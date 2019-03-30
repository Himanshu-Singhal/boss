import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsProgressComponent } from './goals-progress/goals-progress.component';
import { GoalIdeasComponent } from './goal-ideas/goal-ideas.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpendingComponent } from './spending/spending.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'spending',
    component: SpendingComponent,
  },
  {
    path: 'goals/progress',
    component: GoalsProgressComponent,
  },
  {
    path: 'goals/ideas',
    component: GoalIdeasComponent,
  },
  {
    path: '',
    redirectTo: '/goals/progress',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
