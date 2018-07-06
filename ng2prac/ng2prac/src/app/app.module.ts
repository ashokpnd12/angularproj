import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeCountComponent } from './employee/employeecount.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee/employeeList.component'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component'
import { pageNotFoundComponent } from './other/pageNotFound.Component'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        homeComponent,
        EmployeeListComponent,
        EmployeeCountComponent,
        pageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }