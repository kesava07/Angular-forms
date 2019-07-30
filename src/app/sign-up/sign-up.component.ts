import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  // logUserData(userData) {
  //   console.log(userData)
  // }
  contactMethod = [
    {
      id: 1, method: "Email"
    },
    {
      id: 2, method: "Phone"
    }
  ];


  submitForm(formData) {
    if (formData.valid && formData.submitted) {
      const { userName, email, termsConditions, methodOfContact, gender } = formData.value.login
      const loginData = {
        userName,
        email,
        termsConditions,
        methodOfContact,
        gender
      }
      console.log(loginData, formData, "the form is valid")
    }

    else
      console.log("the form is badly formatted", formData)
  }
}
