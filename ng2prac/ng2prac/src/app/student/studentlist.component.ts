import { Component } from '@angular/core'
import {IStudent } from './IStudent'

@Component({
    //selector: 'student-list',
    templateUrl: 'app/student/studentlist.component.html'
})

export class studentlist {
    student: IStudent[] = [
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
    ]
}