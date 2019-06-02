import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  selectedTask : Task

  tasks : Array<Task> =  [
    {nome: "Task 1", descricao : "Tarefa", dataEntega: Date.now()},
    {nome: "Task 2", descricao : "Tarefa", dataEntega: Date.now()},
    {nome: "Task 3", descricao : "Tarefa", dataEntega: Date.now()},
    {nome: "Task 4", descricao : "Tarefa", dataEntega: Date.now()},
    {nome: "Task 5", descricao : "Tarefa", dataEntega: Date.now()},
  ]

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
