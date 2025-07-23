import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'theme';

  constructor() {
    const saved = localStorage.getItem(this.key);
    const theme = saved === 'dark' ? 'dark' : 'light';
    this.setTheme(theme);
  }

  toggleTheme(): void {
    const current = this.getTheme();
    const newTheme = current === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark') {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${theme}-theme`);
    localStorage.setItem(this.key, theme);
  }

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem(this.key) as 'light' | 'dark') ?? 'light';
  }
}
