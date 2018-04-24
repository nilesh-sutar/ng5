import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  
  private goals = new BehaviorSubject<any>(['1st Life Goal','2nd Life Goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
