import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'as-forgot-password',
    templateUrl: '../templates/forgot-password.component.html',
    styleUrls: [
        '../styles/user.css'
    ]
})

export class ForgotPasswordComponent {

    public email: string;
    public response: string;
    public error: any = {};
    public complete: boolean = false;

    constructor(
        private _userService: UserService
    ) {
        return;
    }

    resetPassword() {
        this._userService.passwordReset( { 'email': this.email } ).subscribe((res) => {
            // this.response = res;
            // console.log(res);
            this.complete = true;
        }, (err) => {
            console.log(err);
            this.error = err;
        });
    }

}

