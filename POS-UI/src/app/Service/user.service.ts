import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDTO} from "../dto/UserDTO";
import {Observable} from "rxjs";
import {UserDTOLogIn} from "../dto/UserDTOLogIn";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUser(user:UserDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/user/signup',{
      email:user.email,
      name:user.name,
      contactNumber:user.contactNumber,
      password:user.password
    })
  }

  logInUser(user:UserDTOLogIn):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/user/login',{
      email:user.email,
      password:user.password
    })
  }
}
