/**
 * Created by Ed on 7/16/2017.
 */
import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component({
    templateUrl: 'app/events/event-detail.component.html'
})

export class EventDetailComponent {
    pageTitle: string = 'Event Detail';

    constructor(private _routeParams: RouteParams
            , private _router: Router) {
        let id = this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['Events']);
    }
}
