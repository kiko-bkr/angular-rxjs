import { Component } from '@angular/core';
import { Observable, timer, map, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ng-frontend';

  buttonLabels: string[] = ['A', 'B', 'C'];

  labelStream: Subject<string> = new Subject<string>();
  labels$: Observable<string> = this.labelStream.asObservable();

  timer$: Observable<number> = timer(11000);
  counter$: Observable<number> = timer(0, 1000).pipe(map(n => 10 - n), takeUntil(this.timer$));

  handleClick(label: string): void {
    this.labelStream.next(label);
  }
}
