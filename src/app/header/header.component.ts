import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userEmail: string = '';
  currentRoute: string = '';
  cartCount: number = 0;
   isDark = false;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    this.userEmail = user?.email || '';
    this.currentRoute = this.router.url;

     this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
          });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userEmail = '';
    this.router.navigate(['/login']);
  }



  toggleDark() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('bg-dark', this.isDark);
    document.body.classList.toggle('text-success', this.isDark);
    document.body.classList.toggle('text-drak', this.isDark);
  }
}
