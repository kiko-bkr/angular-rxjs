import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Observable } from 'rxjs';
import { COMMENTS } from 'src/app/data/commens';
import { Comment } from 'src/app/models/comment.model';
import { CommentFilter } from 'src/app/models/commentfilter.model';
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
  private commentFilter$: Observable<CommentFilter> = new Observable<CommentFilter>();

  setFilter(filterObs: Observable<CommentFilter>): void {
    this.commentFilter$ = filterObs;
  }

  getCurrentComments(): Observable<Comment[]> {
    return combineLatest([ this.comments$.asObservable(), this.currentPost$, this.commentFilter$ ], 
      (comms, post, filter) => comms.filter(comm => comm.postId === post.id)
      .filter(comm => filter.positive === null ? true : comm.positive === filter.positive)
      .filter(comm => comm.body.toLowerCase().includes(filter.contains.toLowerCase()))
    );
  }
}
