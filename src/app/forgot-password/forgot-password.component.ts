import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{
    resetForm!: FormGroup;
  loading: boolean = false;
  success: boolean | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.resetForm.valid) {
      const email = this.resetForm.get('email')?.value;
      this.loading = true;

      this.authService.resetPassword(email).subscribe({
        next: (exists) => {
          this.loading = false;
          this.success = exists;
        },
        error: () => {
          this.loading = false;
          this.success = false;
        }
      });
    } else {
      this.resetForm.markAllAsTouched();
    }
  }
}
