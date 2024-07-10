import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDTO} from "../../dto/UserDTO";
import {UserService} from "../../Service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserComponent {
  signUpForm=new FormGroup({
    email:new FormControl(null,[Validators.required]),
    name:new FormControl(null,[Validators.required]),
    contactNumber:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required])
  })

  constructor(private userService:UserService, private router:Router) {}
  signUpUser() {
    let user=new UserDTO(
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('name')?.value,
      this.signUpForm.get('contactNumber')?.value,
      this.signUpForm.get('password')?.value
    );
    this.userService.saveUser(user).subscribe(response=>{
      console.log(response)
      this.router.navigate(['/login']);
      this.signUpForm.patchValue({
        email:null,
        name:null,
        contactNumber: null,
        password: null
      })

    },error => {
      console.log(error)
    })
  }
}
