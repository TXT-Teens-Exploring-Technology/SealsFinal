import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const router: Routes = [
  {path:'homepage', component: HomeComponent},
      {path:'contactpage', component: ContactComponent},
      {path:'aboutpage', component: AboutComponent},

      {path: '', redirectTo: 'home', pathMatch: 'full'},

      { path: '**', component: HomeComponent },
      

];
@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 








}


