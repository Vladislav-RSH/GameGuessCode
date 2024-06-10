import { Component } from '@angular/core';
import { ButtonComponent } from '../button/btn-main/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: 'main.component.html'
})
export class MainComponent {
  constructor(private router: Router) { }

  navigateToGame() {
    this.router.navigate(['/game']);
  }
}