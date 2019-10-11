import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {
    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // return fn();
        // return of(true).pipe(delay(7000), switchMap(_ => fn()))

        if (route.data && route.data['preload']) {
            return fn();
        }

        return of(true);

    }

}