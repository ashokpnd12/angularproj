import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeCountComponent } from './employee/employeecount.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee/employeeList.component'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component'
import { pageNotFoundComponent } from './other/pageNotFound.component'
import { EmployeeService } from './employee/employee.service'
import { employeeComponent } from './employee/employee.component'
import { userPreferencesService } from './employee/userPreferences.service'
import { testModule } from './other/test.component'
import { studentlist } from './student/studentlist.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
    declarations: [
        AppComponent,
        homeComponent,
        EmployeeListComponent,
        EmployeeCountComponent,
        employeeComponent,
        studentlist,
        pageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        testModule
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})

export class AppModule { }