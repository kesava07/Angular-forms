import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  // ************* FormGroup **************

  // formBuilderExample = new FormGroup({
  //   userName: new FormControl("", Validators.required),
  //   contact: new FormGroup({
  //     userEmail: new FormControl("", [Validators.required, Validators.email]),
  //     phone: new FormControl()
  //   }),
  //   courses: new FormArray([])
  // });

  // ************* formBuilder **************

  formBuilderExample;
  constructor(fb: FormBuilder) {
    this.formBuilderExample = fb.group({
      userName: ["", Validators.required],
      contact: fb.group({
        userEmail: ["", [Validators.required, Validators.email]],
        phone: [""]
      }),
      courses: fb.array([])
    })
  }

  get userName() {
    return this.formBuilderExample.get('userName')
  }

  get userEmail() {
    return this.formBuilderExample.get('contact.userEmail')
  }

  get courses() {
    return this.formBuilderExample.get('courses') as FormArray
  }

  addCourse(course: HTMLInputElement) {
    this.courses.push(new FormControl(course.value))
    course.value = ""
  };

  removeCourse(course: FormControl) {
    let index = this.courses.controls.indexOf(course)
    this.courses.removeAt(index);
  }


}
