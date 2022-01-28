import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
import { Post } from 'src/app/models/post.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private postService: PostService, private commentService: CommentService) { }

  currentPost$: Observable<Post> = this.postService.getCurrentPost();

  currentComments$: Observable<Comment[]> = this.commentService.getCurrentComments();
}
