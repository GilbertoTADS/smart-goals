import { Pipe, PipeTransform } from '@angular/core';
import { GoalDomainEnum } from './goal.domain.enum';

@Pipe({
  name: 'goalDomain'
})
export class GoalDomainPipe implements PipeTransform {

  transform(value: GoalDomainEnum, ...args: unknown[]): unknown {
    if(!value) return ""
    return Object.keys(GoalDomainEnum)
            .filter(value => isNaN(Number(value)))[value].replace("_", " ").toLowerCase()
  }

}
