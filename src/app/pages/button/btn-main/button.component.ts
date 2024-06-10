import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-component',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
	@Input()
	title : string = '';

	@Output() clickEvent = new EventEmitter<void>();

	onGame() {
		this.clickEvent.emit();
	}
}
