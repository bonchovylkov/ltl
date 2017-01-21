export class UserRegister {
  Username: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export class UserLogin {
 
  grant_type: string = 'password'
  username: string;
  password: string;

//grant_type=password&username=bonchovylkov@abv.bg&password=1qaz2wsx!Q
  toString(){
    return 'grant_type=' + this.grant_type + '&username=' + this.username + '&password=' + this.password;
  }
}