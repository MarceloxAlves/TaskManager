import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskShowComponent } from './task/task-show/task-show.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskListServiceComponent } from './task/task-list-service/task-list-service.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';

const routes: Routes = [
  { path: 'task-show', component: TaskShowComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-list-service', component: TaskListServiceComponent },
  { path: 'task-datail', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
