import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import{AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
hasError: boolean = false;

  constructor(formBuilder: FormBuilder, public auth:AngularFireAuth, public router: Router) {
    this.loginForm= formBuilder.group({
      email: '',
      password: '',
    });
    
   }

  ngOnInit(): void {
  }
  async onSubmit(){
    console.log(this.loginForm.value)
    const{email, password} =  this.loginForm.value;
    try{
    const user = await this.auth.signInWithEmailAndPassword(email, password)
    if(user){
      this.router.navigateByUrl('/menu');
      
    }
    console.log(user)
    } catch(error){
      this.hasError = true;

    }
  }
}
