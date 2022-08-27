import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    {
    component: HomeComponent,
    path: ''
  },  

  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: ServicesComponent,
    path: 'services'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
