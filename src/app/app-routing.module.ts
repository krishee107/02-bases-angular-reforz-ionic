import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [ // Se define un array de rutas con objetos que tienen la propiedad path y component y se importa RouterModule y Routes
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), // Esto se añade para que las rutas funcionen en la aplicación
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
