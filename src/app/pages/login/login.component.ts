import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '../../services'
import {UserLogin} from '../../models'
import {AppSettings} from '../../app.settings'

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
  providers:[UsersService]
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(private _userSerivce : UsersService, fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      let model = new UserLogin();
      model.password = values['password']
      model.username = values['email']
      this._userSerivce.login(AppSettings.API_ENDPOINT_BASE + "token",model,AppSettings.DEFAULT_AUTH_PAGE)
    }
  }
}
