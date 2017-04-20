import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  constructor(private http: Http){
    console.log("Testing it out");
  }

  getPosts(){
    return this.http.get('http://www.omdbapi.com/?t=mad+max%3A+fury+road')
        .map(res => res.json());
  }
}
