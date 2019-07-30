import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomFormValidator } from '../Common/Validators/Form.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  form = new FormGroup({
    account: new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        CustomFormValidator.cannotContainSpace
      ],
        CustomFormValidator.shouldBeUnique
      ),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ],
        CustomFormValidator.passWordMatch
      )
    })
  });

  get userName() {
    return this.form.get('account.userName')
  };

  get password() {
    return this.form.get('account.password');
  };

  handleLogin() {
    if (!this.form.value.account.userName) {
      this.form.setErrors({
        loginError: true
      })
      console.log(this.form.value.account)
    }


    else
      console.log(this.form.value, "chenna kesava")
  }

}
