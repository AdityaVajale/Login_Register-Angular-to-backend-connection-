import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorHandlingInterceptor } from './interceptor/error-handling.interceptor';
import { MaskpasswordPipe } from './pipes/maskpassword.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
@NgModule({
  // app.module.ts
providers: [{ provide:HTTP_INTERCEPTORS,
  useClass: ErrorHandlingInterceptor,
  multi:true}],

  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateEmployeeComponent,
    FooterComponent,
    MaskpasswordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
HttpClientModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
