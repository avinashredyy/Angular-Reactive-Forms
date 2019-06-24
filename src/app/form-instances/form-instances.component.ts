import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-instances',
  templateUrl: './form-instances.component.html',
  styleUrls: ['./form-instances.component.css']
})
export class FormInstancesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = new User("", 0);

 myForm = new FormGroup({
   name: new FormControl('', Validators.required),
   age: new FormControl('')
 })

 submitForm(){
  console.log(this.myForm.controls.name.value + " is " + this.myForm.controls.age.value + " years old" );
}

}
