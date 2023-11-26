import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public isLoggedIn(): any {
   
 return !!window.localStorage.getItem('token')
  }


  public logout(): void {
    
    localStorage.removeItem('token');
    location.reload();

  }
}