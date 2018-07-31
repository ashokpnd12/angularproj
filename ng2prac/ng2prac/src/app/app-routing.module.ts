import { RouterModule, Routes } from '@angular/router'
import { homeComponent } from './home/home.component'
import { EmployeeListComponent } from './employee/employeeList.component'
import { employeeComponent } from './employee/employee.component'
import { studentlist } from './student/studentlist.component'
import { pageNotFoundComponent } from './other/pageNotFound.component'
import { NgModule } from '@angular/core'

const appRoutes: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: 'employee/:code', component: employeeComponent },
    { path: 'student', component: studentlist },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}