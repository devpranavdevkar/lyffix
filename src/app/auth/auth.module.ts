import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtppageComponent } from './otppage/otppage.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtppageComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ],
})
export class AuthModule { }
