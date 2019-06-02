import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {


  @Input() task : any

  constructor() { 
    
  }

  ngOnInit() {
  }

}
