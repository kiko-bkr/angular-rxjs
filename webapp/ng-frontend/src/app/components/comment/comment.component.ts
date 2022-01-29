import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CommentInput } from 'src/app/models/comment-input.model';
import { Post } from 'src/app/models/post.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private postService: PostService, private commentService: CommentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.defaultValues);
    this.lengthCount$ = this.formGroup.valueChanges.pipe(map(input => input.body.length), startWith(0));
    this.validStream$ = this.formGroup.valueChanges.pipe(map(input => input.positive !== null
      && input.title.length > 0
      && input.body.length > 0
    ));
  }

  currentPost$: Observable<Post> = this.postService.getCurrentPost();

  formGroup: FormGroup;

  lengthCount$: Observable<number>;

  validStream$: Observable<boolean>;

  defaultValues: CommentInput = {title: '', body: '', positive: null};

  onSubmit(post: Post) {
    let input: CommentInput = this.formGroup.value;
    let pos: boolean = input.positive !== null ? input.positive : false;
    this.commentService.addComment({...input, positive: pos,  id: 0, postId: 0}, post);
    this.formGroup.patchValue(this.defaultValues);
  }

}
