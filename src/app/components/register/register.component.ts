import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router,private service:EmployeeService){}
  user=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(8)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,Validators.email])
  })


  register(){
    if (this.user.valid){
      this.service.register(this.user.value).subscribe(
        res =>{
        if(res){
      console.log(this.user.value);
           alert('Registerd Sucessfully!Proceed to login')
         // or send to backend
      this.router.navigateByUrl('/login')
    }
    else
      {  alert('Registration failed.Please try Again.')

      }
    },
    err => {

          console.log('Error:', err.message);
          alert('Something went wrong. Please try later.');
        });}

  }

  }

