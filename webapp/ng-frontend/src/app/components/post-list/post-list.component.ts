import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  constructor(private postService: PostService) { }
  
  posts$: Observable<Post[]> = this.postService.getPosts();

  handleClick(post: Post): void {
    this.postService.setCurrentPost(post);
  }
}
