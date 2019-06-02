import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-list-service',
  templateUrl: './task-list-service.component.html',
  styleUrls: ['./task-list-service.component.css']
})
export class TaskListServiceComponent implements OnInit {

  selectedTask: Task

  tasks : Array<Task> =  []

  constructor(private taskService : TaskServiceService) { 
    
  }

  getTask(): void {
    this.taskService.getTasksDemo().subscribe(tasks => this.tasks = tasks);
    console.log(this.taskService.getTasksDemo())
  }


  ngOnInit() {
    this.getTask()
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    }

}
