"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var studentlist = /** @class */ (function () {
    function studentlist() {
        this.student = [
            {
                id: 1,
                name: 'Mark',
                address: 'K.R Puram',
                mobile: 9208823743,
                stream: 'BBA',
                photo: 'assets/images/mark.png'
            },
            {
                id: 2,
                name: 'Mary',
                address: 'Yeswanthpur',
                mobile: 8908823740,
                stream: 'MBA',
                photo: 'assets/images/mary.png'
            },
            {
                id: 3,
                name: 'John',
                address: 'BTM',
                mobile: 6908823785,
                stream: 'BCA',
                photo: 'assets/images/john.png'
            },
        ];
    }
    studentlist = __decorate([
        core_1.Component({
            //selector: 'student-list',
            templateUrl: 'app/student/studentlist.component.html'
        })
    ], studentlist);
    return studentlist;
}());
exports.studentlist = studentlist;
//# sourceMappingURL=studentlist.component.js.map