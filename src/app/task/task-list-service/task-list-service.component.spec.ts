import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListServiceComponent } from './task-list-service.component';

describe('TaskListServiceComponent', () => {
  let component: TaskListServiceComponent;
  let fixture: ComponentFixture<TaskListServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
