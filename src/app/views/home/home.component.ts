import { Component } from '@angular/core';
import { GoalComponent } from '../../components/goal/goal.component';

@Component({
  selector: 'app-home',
  imports: [GoalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
