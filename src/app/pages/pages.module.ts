import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
   exports: [
    AboutComponent,
    ServicesComponent,
     ContactComponent,
    HomeComponent
  ]
})
export class PagesModule { }
