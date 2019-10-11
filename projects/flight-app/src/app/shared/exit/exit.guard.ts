import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightEditComponent } from '../../flight-booking/flight-edit/flight-edit.component';

export interface ExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable({providedIn: 'root'})
export class ExitGuard implements CanDeactivate<ExitComponent> {
    canDeactivate(
        component: ExitComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        
        return component.canExit();

    }
}