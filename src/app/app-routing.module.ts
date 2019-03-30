import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsProgressComponent } from './goals-progress/goals-progress.component';
import { GoalIdeasComponent } from './goal-ideas/goal-ideas.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpendingComponent } from './spending/spending.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
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
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
