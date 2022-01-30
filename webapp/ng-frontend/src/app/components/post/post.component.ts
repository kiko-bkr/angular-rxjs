import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, startWith, Subscription } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
import { CommentFilter } from 'src/app/models/comment-filter.model';
import { Post } from 'src/app/models/post.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService, private commentService: CommentService, private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
      this.formGroup = this.formBuilder.group(this.defaultFilter);

      this.commentService.setFilter(this.formGroup.valueChanges
        .pipe(startWith({positive: null, contains: ''})));
      this.currentComments$ = this.commentService.getCurrentComments();
      
      this.formResetSubscription = 
        this.currentPost$.subscribe(() => this.formGroup.patchValue(this.defaultFilter));
  }

  formGroup: FormGroup;

  currentPost$: Observable<Post> = this.postService.getCurrentPost();

  currentComments$: Observable<Comment[]>;

  defaultFilter: CommentFilter = {positive: null, contains: ''};

  formResetSubscription: Subscription;

  ngOnDestroy(): void {
    if (this.formResetSubscription)
      this.formResetSubscription.unsubscribe();
  }
}
