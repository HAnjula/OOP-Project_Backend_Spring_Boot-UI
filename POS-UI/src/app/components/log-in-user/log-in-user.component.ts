import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../Service/user.service";
import {UserDTO} from "../../dto/UserDTO";
import {UserDTOLogIn} from "../../dto/UserDTOLogIn";

@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.scss']
})
export class LogInUserComponent {
  logInForm=new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required])
  })

  constructor(private userService:UserService) {}
  logInUser() {
    let user=new UserDTOLogIn(
      this.logInForm.get('email')?.value,
      this.logInForm.get('password')?.value
    );
    this.userService.logInUser(user).subscribe(response=>{
      console.log(response.data)
      alert(response.data)
    },error => {
      console.log(error)
    })
  }
}
