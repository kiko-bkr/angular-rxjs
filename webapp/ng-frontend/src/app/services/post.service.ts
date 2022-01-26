import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { POSTS } from '../data/posts';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(POSTS);
  private currentPost$: Subject<Post> = new Subject<Post>();
  
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
