import { Habit } from "../habit/habit.entity";
import { GoalDomainEnum } from "./goal.domain.enum";
import { GoalPlan } from "./goal.plan";
import { GoalStatusEnum } from "./goal.status.enum";

export interface Goal{
    id:number
    name:string
    motivation:string
    status:GoalStatusEnum
    domain:GoalDomainEnum
    startDate:string
    EndDate:string
    habits:Habit[]
    plan:GoalPlan[]
}