import { Injectable} from '@angular/core'

@Injectable()
export class userPreferencesService {
    constructor() {
        console.log('new instance created..')
    }
    colorPreferences:string = 'white'
}