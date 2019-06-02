import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskShowComponent } from './task/task-show/task-show.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskListServiceComponent } from './task/task-list-service/task-list-service.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskShowComponent,
    TaskListComponent,
    TaskListServiceComponent,
    TaskDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
