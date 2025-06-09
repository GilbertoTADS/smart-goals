import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GoalComponent } from './components/goal/goal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, GoalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  headerConfig = { title:'S.M.A.R.T Goals', brand:'Specific Measurable Realistic Time-bound' }
  goals = [{ id:0, name:'my first goal',motivation:'declaring my first motivation here', status:0,domain:9,startDate:'06/06/2025',EndDate:'06/06/2025',habits:[],plan:[]}];
}
