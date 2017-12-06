import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Tasks } from './tasks';
import { tasks_list } from './mock-tasks-list';
import { done_tasks_list } from './mock-tasks-list';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) { }
  private heroesUrl = 'http://localhost:3000/routes/tasks';  // URL to web api
    getTask (): Observable<any> {
      return this.http.get<any>(this.heroesUrl)
        .pipe(
          tap(ok => console.log('ok'))
        );
    }
    insertTask(task: Tasks): Observable<any> {
    tasks_list.push(task);
      return this.http.post<any>(this.heroesUrl, task, httpOptions).pipe(
        tap(ok => console.log('ok'))
      );
  }
    getDoneTask() {
    return done_tasks_list;
  }
    insertDoneTask(task: String) {
    done_tasks_list.push(task);

  }
}
