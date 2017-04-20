import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'films',
  templateUrl: 'films.component.html',
  providers: [PostsService]
})
export class FilmsComponent  {

  posts: Post[];

  constructor(private postsService: PostsService){
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  console.log(posts.Title);
}

interface Post{
  Title: string;
  Director: string;
  Poster: string;
}
