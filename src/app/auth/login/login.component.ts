import { Component, OnInit } from '@angular/core';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  
  phoneAuth() {
  
    var number = document.getElementById('mobile');
    firebase.auth().SignInWithPhoneNumber(number)
  }

}
