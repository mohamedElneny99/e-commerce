import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      // لو المستخدم مسجّل دخول بالفعل، نرجعه على /products
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
