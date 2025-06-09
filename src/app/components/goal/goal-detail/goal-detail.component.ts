import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../goal.entity';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoalStatusEnum } from '../goal.status.enum';
import { NgClass, NgFor } from '@angular/common';
import { GoalDomainEnum } from '../goal.domain.enum';

@Component({
  selector: 'app-goal-detail',
  imports: [ReactiveFormsModule,FormsModule,NgFor,NgClass],
  standalone:true,
  templateUrl: './goal-detail.component.html',
  styleUrl: './goal-detail.component.css'
})
export class GoalDetailComponent implements OnInit{
  message:string = 'Organization is a master of productivity'
  @Input() goal!:Goal
  @Input() private readonly me!:NgbModalRef
  goalForm!:FormGroup

  constructor(private readonly fb:FormBuilder){}

  ngOnInit(): void {
      this.buildForm()
  }
  getStatus():string[]{
    return Object.keys(GoalStatusEnum).filter(v => isNaN(Number(v)))
  }
  getDomain():string[]{
    return Object.keys(GoalDomainEnum).filter(v => isNaN(Number(v)))
  }
  save():void{
    console.log('save')
    this.me.close('testing')
  }
  close(){
    this.me.close('testing')
  }
  private buildForm(){
    this.goalForm = this.fb.group({ 
        id:[''],
        name:[this.goal?.name||'',[Validators.required ,Validators.min(5)]],
        motivation:['',[Validators.required]],
        status:['',[Validators.required]],
        domain:['',[Validators.required]],
        startDate:['',[Validators.required]],
        endDate:['',[Validators.required]],
        habits:['',[Validators.required]],
        plan:['',[Validators.required]]
      })
  }
}
