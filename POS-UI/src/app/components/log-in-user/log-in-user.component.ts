import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../Service/user.service";
import { UserDTOLogIn } from "../../dto/UserDTOLogIn";
import { Router } from "@angular/router";


@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.scss']
})
export class LogInUserComponent {
  logInForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  okMessage: string | null = null; 
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  logInUser() {
    let user = new UserDTOLogIn(
      this.logInForm.get('email')?.value,
      this.logInForm.get('password')?.value
    );

    this.userService.logInUser(user).subscribe(response => {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
      this.errorMessage = null;
      this.okMessage = response.message;  
    }, error => {
      this.okMessage = null;
      if (error.status === 400) {
        this.errorMessage = error.error.data[0].defaultMessage ;  
      }else{
        this.errorMessage = error.error.message || 'An error occurred';  
      }
    });
  }
}
