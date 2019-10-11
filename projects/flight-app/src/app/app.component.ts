import {Component} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading = false;

  constructor(private router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(_ => {
      this.loading = true;
    });

    router.events.pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError )).subscribe(_ => {
      this.loading = false;
    });
  }
}

