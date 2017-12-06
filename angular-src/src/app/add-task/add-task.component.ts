import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

import { Tasks } from '../tasks';
import { tasks_list } from '../mock-tasks-list';
import { done_tasks_list } from '../mock-tasks-list';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [TasksService]
})
export class AddTaskComponent implements OnInit {
  task = {name: ''};

  response: string;

  tasks: Array<Tasks>;

  constructor(private _TasksService: TasksService) { }

  onClick(name: string) {
    this._TasksService.insertTask({name: this.task.name}).subscribe(
      response => this.response = response,
      err => console.log(err)
    );
    this._TasksService.getTask().subscribe(
      tasks => this.tasks = tasks.task,
      error => console.log(error)
    );
  }
onRemove(x: string){
    console.log(x);
}

  ngOnInit() {
    this._TasksService.getTask().subscribe(
      tasks => this.tasks = tasks.task,
      error => console.log(error)
    );
  }
}
