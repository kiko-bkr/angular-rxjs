import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { COMMENTS } from 'src/app/data/commens';
import { Comment } from 'src/app/models/comment.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private postService: PostService) { }
  
  private comments: Comment[] = [...COMMENTS];
  private comments$: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>(this.comments);
  private currentPost$: Observable<Post> = this.postService.getCurrentPost();

  getCurrentComments(): Observable<Comment[]> {
    return combineLatest([ this.comments$.asObservable(), this.currentPost$ ], 
      (comms, post) => comms.filter(comm => comm.postId == post.id)
    );
  }
}
