import { Routes } from '@angular/router';
import { GoalComponent } from './components/goal/goal.component';

export const routes: Routes = [
    { path:"home", component:GoalComponent },
    { path:"", redirectTo:"/home", pathMatch:"full" },
];
