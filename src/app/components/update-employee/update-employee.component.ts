import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
constructor(private service:EmployeeService,private route:ActivatedRoute,private router:Router){}
emp!:any;
user!:FormGroup;
ngOnInit():void{
  const id=this.route.snapshot.paramMap.get('id');
   this.user=new FormGroup({
      id:new FormControl(''),
      name:new FormControl('',[Validators.required,Validators.minLength(8)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      email:new FormControl('',[Validators.required,Validators.email])
 })

 this.service.getEmpByID(id).subscribe(result=>{
  this.emp=result;

  this.user.patchValue({
    id:result.id,
    email:result.email,
    name:result.name,
    password:result.password,
  })
 })
}
update(){
  this.service.update(this.user.value).subscribe(res=>{
if(res){
alert("Employee Updated!");
this.router.navigateByUrl('/dashboard')
}else{
  alert('Something went wrong!')
}
  })

  }
}

