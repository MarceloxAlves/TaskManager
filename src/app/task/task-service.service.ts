import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from './mock-tasks';



@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  
  boardsCache: Task[] = [];

  constructor() {

   }


  getTasksDemo(): Observable<Task[]> {
    return  of(TASKS);
  }


}
