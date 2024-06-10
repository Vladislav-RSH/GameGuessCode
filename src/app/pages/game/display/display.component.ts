import { Component, Input } from '@angular/core';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'display-component',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './display.component.html',
})
export class DisplayComponent {
	private count : number = 0;

	@Input() values  = [];
}
