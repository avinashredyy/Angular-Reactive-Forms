import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  myForm = this.fb.group({
    name: ['', Validators.required],
    age: ['']
  });

  submitForm(){
    console.log(this.myForm.controls.name.value + " is " + this.myForm.controls.age.value + " years old" );
  }

}
