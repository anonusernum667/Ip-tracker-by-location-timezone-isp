import { Component } from '@angular/core';
import { AsyncLocalStorage } from 'async_hooks';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
  export class HeaderComponent {

    constructor() {
      // Initialize dark mode based on user's preference or system setting
    }
    ngOnInit() {
      this.initializeDarkMode();
    }
    toggleDarkMode() {
      document.documentElement.classList.toggle('dark');

      // Optional: Save the user's preference to localStorage
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

    }

    initializeDarkMode() {
      const userPreference = localStorage.getItem('theme');
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (userPreference === 'dark' || (!userPreference && systemPreference)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
