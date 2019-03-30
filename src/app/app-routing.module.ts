import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpendingComponent } from './spending/spending.component';
import { GoalsComponent } from './goals/goals.component';

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
    path: 'goals',
    component: GoalsComponent,
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
