import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  registerForm =  new FormGroup({
    name:  new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobileNumber: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    rePassword: new FormControl('',Validators.required),
    serialKey: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }


  register(){
    console.log(this.registerForm.value)
  }

}
