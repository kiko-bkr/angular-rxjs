import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private postService: PostService) { }

  currentPost$: Observable<Post> = this.postService.getCurrentPost();
}
