/**
 * Created by ewalspr on 6/16/2017.
 */
import { Component } from 'angular2/core';
import { EventListComponent } from './events/event-list.component';
import { EventService } from './events/event.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features

@Component({
    selector: 'events-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <el-events></el-events>
    </div>
    `,
    directives: [EventListComponent],
    providers: [EventService, HTTP_PROVIDERS]
})

export class AppComponent {
    pageTitle: string = 'Local Events App';
}
