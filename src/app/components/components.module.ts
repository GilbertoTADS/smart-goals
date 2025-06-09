import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoalComponent } from './goal/goal.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    GoalComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    GoalComponent
  ]
})
export class ComponentsModule { }
