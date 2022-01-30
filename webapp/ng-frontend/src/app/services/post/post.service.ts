import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { POSTS } from '../../data/posts';
import { Post } from '../../models/post.model';
import { CommentService } from '../comment/comment.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(POSTS);
  private currentPost$: BehaviorSubject<Post> = new BehaviorSubject<Post>({id: 0, title: '', body: ''});
  
  constructor() { }

  getPosts(): Observable<Post[]> {
    return this.posts$.asObservable();
  }

  getCurrentPost(): Observable<Post> {
    return this.currentPost$.asObservable();
  }

  setCurrentPost(post: Post): void {
    this.currentPost$.next(post);
  }
}
