import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { Goal } from './goal.entity';
import { NgFor } from '@angular/common';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoalDomainPipe } from './goal-domain.pipe';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalLocalStorageService } from '../../services/goal/goal-local-storage.service';

@Component({
  selector: 'app-goal',
  imports: [NgFor, NgbModule,GoalDomainPipe, NgbModule],
  providers:[NgbActiveModal,NgbModal],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent implements OnInit{
  
  activeModal = inject(NgbModal)
  goals!:Goal[]

  constructor(private readonly service:GoalLocalStorageService){}
  
  ngOnInit(): void {
   this.getAll()
  }
  create(){
    this.openGoalModal(<Goal>{name:''})
  }
  edit(idx:number){  
    this.openGoalModal(this.goals[idx])
  }
  private openGoalModal(goal:Goal){
    const modalRef = this.activeModal.open(GoalDetailComponent)
    modalRef.componentInstance.me = modalRef
    modalRef.componentInstance.goal = goal
    modalRef.result.then( () => this.getAll()).catch(() => this.getAll())
  }
  private getAll(){
    const goals:Goal[]|null = this.service.get()
    this.goals = goals || [];
  }
}
