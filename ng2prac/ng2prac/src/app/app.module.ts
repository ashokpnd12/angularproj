import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeCountComponent } from './employee/employeecount.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee/employeeList.component'

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent, EmployeeCountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }