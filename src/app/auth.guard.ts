import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
 providedIn:'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router){}

  canActivate():boolean{
  const isloggedIn=!!localStorage.getItem('token');
  if(!isloggedIn){
     this.router.navigate(['/login'])//redirected to login if not logged in
     return false;
  }
   return true; // Allow access if logged in
  }
}
