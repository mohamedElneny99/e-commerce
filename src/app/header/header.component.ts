import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { selectCartCount, selectCartItems  } from '../cart/cart.selectors';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive , AsyncPipe , ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userEmail: string = '';
  currentRoute: string = '';
  cartCount$: Observable<number>;
  isDark = false;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    this.userEmail = user?.email || '';
    this.currentRoute = this.router.url;

         this.cartCount$ = this.store.select(selectCartCount);
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
