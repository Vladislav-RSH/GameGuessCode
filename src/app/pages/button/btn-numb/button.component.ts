import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-component',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
	title : string = 'Guess The Code';

	@Input() value : string = '0';

	@Output() onValue = new EventEmitter<string>();

	onClick() {
		this.onValue.emit(this.value);
	}
}
