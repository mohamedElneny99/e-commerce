import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule , RouterLink , RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   signupForm!: FormGroup;
  signupFailed: boolean = false;
  success: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.loading = true;

      this.authService.signup(email, password).subscribe({
        next: () => {
          this.success = true;
          this.signupFailed = false;
          this.loading = false;
          setTimeout(() =>  this.router.navigate(['/products']), 1500);
        },
        error: () => {
          this.signupFailed = true;
          this.loading = false;
        }
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

}
