import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ExitComponent } from '../../shared/exit/exit.guard';
import { Observable, Observer } from 'rxjs';
import { Flight } from '@flight-workspace/flight-api';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, ExitComponent {

  id: string;
  showDetails: string;
  showWarning = false;
  sender: Observer<boolean>;
  flight: Flight;

  constructor(private route: ActivatedRoute) {
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable<boolean>(sender => {
      this.sender = sender;
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(p => {
    //   this.id = p['id'];
    //   this.showDetails = p['showDetails'];
    // });

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    })
  }

}
