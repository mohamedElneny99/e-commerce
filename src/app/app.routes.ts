import { Routes } from '@angular/router';
import { AuthRedirectGuard } from './guard/authRedirect';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./header/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./header/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'products', loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent) , canActivate: [AuthGuard] },
  { path: 'product/:id', loadComponent: () => import('./product-list/product-details/product-details.component').then(m => m.ProductDetailsComponent) , canActivate: [AuthGuard] },
  { path: 'buy/:id', loadComponent: () => import('./product-list/buy/buy.component').then(m => m.BuyComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent), canActivate: [AuthRedirectGuard] },
  { path: 'signup', loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) , canActivate: [AuthRedirectGuard]},
  { path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'dashboard', loadComponent: () => import('./tasks/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },

];
