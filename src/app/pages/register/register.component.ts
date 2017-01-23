import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import  {UsersService,EmitterService} from '../../services/index'
import {AppSettings} from '../../app.settings'
import {UserRegister} from '../../models'

//const  registerUrl:string = AppSettings.API_ENDPOINT + 'account/register';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./register.scss')],
  template: require('./register.html'),
   providers:[UsersService]
})

export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  constructor(public userSerive: UsersService,fb:FormBuilder) {
EmitterService.get(AppSettings.EMITTER_KEY_HIDE_ASIDE).emit(false);
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {

      var userData = new UserRegister();
      userData.Username = values['name'];
      userData.Email = values['email'];
      userData.Password = values['passwords']['password'];
      userData.ConfirmPassword = values['passwords']['repeatPassword'];

      this.userSerive.register(AppSettings.API_ENDPOINT_REGISTER,userData,'/login')
    
      console.log(values)
      // your code goes here
      // console.log(values);
    }
  }
}
