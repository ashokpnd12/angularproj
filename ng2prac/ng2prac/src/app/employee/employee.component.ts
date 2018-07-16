import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class employeeComponent implements OnInit {
        employees: IEmployee;

    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    onBackButtonBind(): void{
        this._router.navigate(['/employee'])
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code']
        this._employeeService.getEmployeesByCode(empCode)
            .subscribe(employeesData => {
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