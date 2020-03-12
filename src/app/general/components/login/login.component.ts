import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore"
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasError: boolean = false;

  constructor(
    formBuilder: FormBuilder, 
    public auth:AngularFireAuth,
    public router: Router,
    public fireStore: AngularFirestore
    ) { 
    this.loginForm = formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {}

  async onSubmit(){
   console.log(this.loginForm.value) 
   const { email, password } = this.loginForm.value;
   try {
    //  const  user = await this.auth.createUserWithEmailAndPassword()
    const {user} = await this.auth.signInWithEmailAndPassword(email, password)
     if(user){
      //  this.router.navigateByUrl('/')
      this.addUserInfo()
     }
   } catch (error) {
     this.hasError = true;
   }
  }


  async addUserInfo() {
    const user = await this.auth.currentUser
    const response =  await this.fireStore.collection('user-info').add({
      userId: user.uid,
      telefono: 232323
    })
    console.log(response)

  }
}
