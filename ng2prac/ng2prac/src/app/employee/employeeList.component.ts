// Import OnInit Life Cycle Hook interface
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
// Import EmployeeService
import { EmployeeService } from './employee.service';
import { userPreferencesService } from '../employee/userPreferences.service'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/scan'
import { ISubscription } from 'rxjs/Subscription'
@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
// Make the class implement OnInit interface
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    retryCount: number = 1;
    Subscription: ISubscription

    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';
    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    constructor(private _employeeService: EmployeeService, private _userPreference: userPreferencesService) {}

    get color(): string {
        return this._userPreference.colorPreferences
    }

    set color(value: string) {
        this._userPreference.colorPreferences = value
    }

    onStopRetryButtonBind(): void {
        this.statusMessage = "Retry attempt stopped"
        this.Subscription.unsubscribe()
    }

    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    ngOnInit() {
        this.Subscription=this._employeeService.getEmployees()
            .retryWhen(err => {
                return err.scan((retryCount) => {
                    retryCount += 1
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying...Attempt #' + retryCount
                        return retryCount
                    }
                    else
                        throw (err)
                }, 0).delay(1000)
            })
            .subscribe(employeesData => this.employees = employeesData, error => { this.statusMessage = 'Problem with the service. Please try again after sometime'; console.error(error) });
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees
            .filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}