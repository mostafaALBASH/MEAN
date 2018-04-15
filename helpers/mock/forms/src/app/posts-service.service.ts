import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class PostsServiceService {

  constructor(private _http: Http) {
   }
    getPosts(){
      return this._http.get('http://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
    }

}
