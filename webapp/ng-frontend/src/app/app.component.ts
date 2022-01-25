import { Component } from '@angular/core';
import { Observable, timer, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-frontend';

  timer$: Observable<number> = timer(11000);

  counter$: Observable<number> = timer(0, 1000).pipe(map(n => 10 - n), takeUntil(this.timer$));
}
