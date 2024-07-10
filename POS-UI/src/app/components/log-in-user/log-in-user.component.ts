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

  constructor(private userService: UserService, private router: Router) {}

  logInUser() {
    let user = new UserDTOLogIn(
      this.logInForm.get('email')?.value,
      this.logInForm.get('password')?.value
    );

    this.userService.logInUser(user).subscribe(response => {
      if (response && response.data === 'Successfully logged!') {
        // Store the login state
        localStorage.setItem('isLoggedIn', 'true');

        // Navigate to the home screen
        this.router.navigate(['/home']);
      } else {
        alert(response.data);
      }
    }, error => {
      console.log(error);
      alert('Login failed');
    });
  }
}
