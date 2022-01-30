import { Component } from '@angular/core';
import { POSTS } from './data/posts';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title: string = 'ng-frontend';
}
