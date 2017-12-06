import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
// import { Tasks } from '../tasks';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css'],
  providers: [TasksService]
})

export class DoneTasksComponent implements OnInit {
  tasks: Array<String>;
  constructor(private  _tasksService: TasksService) { }

  ngOnInit(): any {
    this.tasks = this._tasksService.getDoneTask();
  }
}
