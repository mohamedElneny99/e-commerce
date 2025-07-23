import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './service/auth.service';
import { FooterComponent } from './footer/footer.component';

// import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent  {
   isLoading = false;

  constructor(public router: Router , private authService: AuthService) {
     this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }


  shouldShowHeader(): boolean {
    const hiddenRoutes = ['/login', '/signup', '/forgot-password'];
    return !hiddenRoutes.includes(this.router.url);
  }




 }
