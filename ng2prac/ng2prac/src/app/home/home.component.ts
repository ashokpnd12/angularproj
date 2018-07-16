import { Component } from '@angular/core'
import {userPreferencesService } from '../employee/userPreferences.service'
@Component({
    templateUrl: 'app/home/home.component.html'
})
export class homeComponent {
    constructor(private _userPreferrences: userPreferencesService) {}

    get color(): string {
        return this._userPreferrences.colorPreferences;
    }

    set color(value: string) {
        this._userPreferrences.colorPreferences=value
    }
}