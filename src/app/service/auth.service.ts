import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin: boolean = false;
  private apiKey = 'AIzaSyCvMnR3uIh_7KTmEUk1wyQN52Bm5IKjbqs';

  constructor(private http: HttpClient) {}

  /** تسجيل الدخول عبر Firebase Auth */
  login(email: string, password: string): Observable<any> {
    const firebaseAuthUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;

    return this.http.post<any>(firebaseAuthUrl, {
      email,
      password,
      returnSecureToken: true
    }).pipe(
      map(response => {
        this.isLoggedin = true;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        this.isLoggedin = false;
        return throwError(() => error.error?.error?.message || 'Login failed');
      })
    );
  }

  /** تسجيل حساب جديد باستخدام Firebase */
  signup(email: string, password: string): Observable<any> {
    const firebaseSignupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;

    return this.http.post<any>(firebaseSignupUrl, {
      email,
      password,
      returnSecureToken: true
    }).pipe(
      map(response => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.error?.error?.message || 'Signup failed');
      })
    );
  }

  /** إعادة تعيين كلمة المرور */
  resetPassword(email: string): Observable<any> {
    const resetUrl = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.apiKey}`;

    return this.http.post<any>(resetUrl, {
      requestType: 'PASSWORD_RESET',
      email: email
    }).pipe(
      map(response => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.error?.error?.message || 'Password reset failed');
      })
    );
  }

  /** تسجيل الخروج */
  logout(): void {
    this.isLoggedin = false;
    localStorage.removeItem('user');
  }


  getLoggedInUser(): any {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
}



}



