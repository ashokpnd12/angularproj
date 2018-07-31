"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import OnInit Life Cycle Hook interface
var core_1 = require("@angular/core");
// Import EmployeeService
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("../employee/userPreferences.service");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var EmployeeListComponent = /** @class */ (function () {
    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    function EmployeeListComponent(_employeeService, _userPreference) {
        this._employeeService = _employeeService;
        this._userPreference = _userPreference;
        this.retryCount = 1;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = 'Loading data. Please wait...';
    }
    Object.defineProperty(EmployeeListComponent.prototype, "color", {
        get: function () {
            return this._userPreference.colorPreferences;
        },
        set: function (value) {
            this._userPreference.colorPreferences = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.onStopRetryButtonBind = function () {
        this.statusMessage = "Retry attempt stopped";
        this.Subscription.unsubscribe();
    };
    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Subscription = this._employeeService.getEmployees()
            .retryWhen(function (err) {
            return err.scan(function (retryCount) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'Retrying...Attempt #' + retryCount;
                    return retryCount;
                }
                else
                    throw (err);
            }, 0).delay(1000);
        })
            .subscribe(function (employeesData) { return _this.employees = employeesData; }, function (error) { _this.statusMessage = 'Problem with the service. Please try again after sometime'; console.error(error); });
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees
            .filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        })
        // Make the class implement OnInit interface
        ,
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, userPreferences_service_1.userPreferencesService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map