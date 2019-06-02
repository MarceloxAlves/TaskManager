import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-show',
  templateUrl: './task-show.component.html',
  styleUrls: ['./task-show.component.css']
})
export class TaskShowComponent implements OnInit {

  task : Task = {
    nome: "Tarefa X",
    descricao:"Teste",
    dataEntega: new Date
  }

  constructor() { }

  ngOnInit() {
  }

}
