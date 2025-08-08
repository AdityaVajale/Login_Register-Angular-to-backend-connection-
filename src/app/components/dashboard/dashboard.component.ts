import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
employees:any;

constructor(private service:EmployeeService,private router:Router){
  this.getAll();
}

  getAll(){
this.service.getAll().subscribe(res =>{
  console.log(res);
  this.employees=res;
})
alert('Press"ok" to Dashboard!');
  }

  deleteEmployee(id:any){
    this.service.deleteEmployee(id).subscribe(res=>{
      if(res){
        alert('data deleted!')
      }
      else{
        alert("something went wrong!")
      }
    })
  }

  //logout function
   logout() {
    localStorage.removeItem('token'); // Clear token
    this.router.navigateByUrl('/login'); // Redirect to login
  }
}
