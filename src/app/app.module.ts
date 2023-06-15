import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { ProfileComponent } from './profile/profile.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { FormsModule } from '@angular/forms';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'dashboard', component: DashboardComponent },
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     ProfileComponent,
//     DashboardComponent,
//     LoginComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes),
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }





// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     ProfileComponent,
//     DashboardComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
