import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                    <div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active">
                                <a routerLink="home">Home</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employee">Employees</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="student">Students</a>
                            </li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>
              `
})

export class AppComponent { }