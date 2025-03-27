import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
{path: 'login', component: LoginComponent},
{path:'home', component:HomeComponent},
{path:'about',component:AboutComponent },
{path:'contact',component:ContactComponent},
{path:'**', redirectTo:'home'}


];

