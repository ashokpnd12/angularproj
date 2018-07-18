import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'
import { ActivatedRoute, Router } from '@angular/router'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/scan'
import { ISubscription } from 'rxjs/Subscription'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class employeeComponent implements OnInit {
    employees: IEmployee;
    retryCount: number = 1;
    Subscription: ISubscription

    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    onBackButtonBind(): void{
        this._router.navigate(['/employee'])
    }

    onStopRetryButtonBind(): void {
        this.statusMessage = "Retry attempt stopped"
        this.Subscription.unsubscribe()
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code']
        this.Subscription = this._employeeService.getEmployeesByCode(empCode)
            .retryWhen(err => {
                return err.scan((retryCount) => {
                    retryCount += 1
                    if (retryCount < 6){
                        this.statusMessage = 'Retrying...Attempt #' + retryCount
                    return retryCount
                    }
                    else
                        throw(err)
            },0).delay(1000)
    }).subscribe(employeesData => {
                if (employeesData == null)
                    this.statusMessage = 'Employee with the specified Employee Code does not exist'
                else
                    this.employees = employeesData
            },
        error => {
            this.statusMessage = 'Problem with the service. Please try again after sometime'
            console.error(error)
        })
    }
}