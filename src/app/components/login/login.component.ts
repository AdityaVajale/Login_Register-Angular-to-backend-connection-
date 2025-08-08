import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private service:EmployeeService){}

  userLogin={
    username:'',
    password:''
  }
 login(form:NgForm){
  this.service.login(this.userLogin).subscribe(res=>{
    console.log(res);
    if(res!=null){
       alert('Login SuccessFull')
       localStorage.setItem('token','your_token_value')
       this.router.navigateByUrl('/dashboard')
    }
    else{
     alert('login unsuccesfull!')
        this.userLogin.username='',
        this.userLogin.password=''
    }
  })
 }
}
