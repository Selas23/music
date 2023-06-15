import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
