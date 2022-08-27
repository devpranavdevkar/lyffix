import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Firebase
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({ apiKey: "AIzaSyDNDFtlzmdmHP0nDy4O2_oKh53Ftkv0220",
  authDomain: "otpauth-3e34e.firebaseapp.com",
  projectId: "otpauth-3e34e",
  storageBucket: "otpauth-3e34e.appspot.com",
  messagingSenderId: "530065214008",
  appId: "1:530065214008:web:b1a1d9ba2745517098b4cd",
  measurementId: "G-YCQ1J6E9ZF" })),
    provideFirestore(() => getFirestore()),
  //   AngularFireModule,
  //  AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
