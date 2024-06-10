import { Component, Input } from '@angular/core';

@Component({
  selector: 'items-component',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
})
export class ItemsComponent {
	@Input() value: string = '';
	
	
}
