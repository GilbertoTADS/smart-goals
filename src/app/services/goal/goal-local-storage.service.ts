import { Inject, Injectable } from '@angular/core';
import { Goal } from '../../components/goal/goal.entity';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GoalLocalStorageService {
  private readonly key:string = 'goals'
  private readonly local:Storage|null|undefined;

  constructor(@Inject(DOCUMENT) private readonly document:Document) {
    this.local = this.document.defaultView?.localStorage;
  }

  get():Goal[]|null{
    return this.parse(this.local?.getItem(this.key))
  }
  save(goal:Goal):Goal|null{
    const ObjToDb:string|null = this.toString(goal)
    const objFromDb:Goal[]|null = this.get()

    if(!ObjToDb) return null
    if(!objFromDb) return this.set(ObjToDb)

    return this.add(objFromDb,goal)
    
  }
  private add(goals:Goal[], goal:Goal):Goal|null{
    goals.push(goal);
    const goalsToDb = this.toString<Goal[]>(goals)
    if(!goalsToDb) return null;
    return this.set<Goal>(goalsToDb);
  }
  private set<T>(goal:string):T|null{
    this.local?.setItem(this.key,goal);
    return this.parse(goal)
  }
  private toString<T>(goal:T):string|null{
    if(!goal) return null;
    try{
      return JSON.stringify( Array.isArray(goal) ? goal : [goal])
    }catch(err){
      console.log(err)
      return null
    }
  }
  private parse<T>(goalString:string|null|undefined):T|null{
    if(!goalString) return null;
    try{
      return JSON.parse(goalString) as T
    }catch(err){
      console.log(err)
      return null
    }
    
  }
}
