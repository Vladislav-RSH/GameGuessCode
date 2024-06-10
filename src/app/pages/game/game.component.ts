import { Component } from '@angular/core';
import { ButtonComponent } from '../button/btn-numb/button.component';
import { DisplayComponent } from './display/display.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ButtonComponent, DisplayComponent, CommonModule, NgIf, NgFor],
  templateUrl: './game.component.html',
})
export class GameComponent {
	title : string = 'Guess The Code';
	value : string = '';
	values  = [];
	public checkCount: number = 0;
	private count: number = 0;
	private code: string = this.generateCode();
	private result: string = '';
	check = 0;

	isShowModal = false;
	isWinModal = false;
	isShow = false;

	blocks = [];
	newBlock = null;

	generateBlocks(value1: string, value2: string) {
		this.blocks.push({ value1: value1, value2: value2 });
	  }

	generateBlock(value: string) {
		this.newBlock = { value: value };
	}

	toggleDisplay() {
		this.isShow = !this.isShow;
	}

	private generateCode() : string {
		return this.code = String(('0000' + Math.floor(Math.random() * 10000)).slice(-4));
	}

	tryAgain() {
		this.values = [];
		this.count = 0; 
		this.result = '';
		this.check = 0;

		this.isShowModal = false;
	}

	playAgain() {
		this.values = [];
		this.count = 0; 
		this.result = '';
		this.check = 0;
		this.generateCode();
		this.blocks = [];

		this.isWinModal = false;
	}

	private checkCode() : number {
		this.checkCount = 0;
		for (let i = 0; i < this.result.length; i++) {
			if (this.result[i] === this.code[i]) {
				this.checkCount++;
			}
		}
		console.log(this.checkCount);
		return this.checkCount;
	}

	onValueEvent(value: string) {
		console.log(this.code);
		if (this.result === this.code) {
			console.log('Win');
		}
		else {
			while (this.result !== this.code) {
				while(this.count < 4) {
					this.value = value;
					this.values.push(this.value);
					this.count++;
					this.result += this.value;
					if (this.result.length === 4) {
						this.check = this.checkCode();
						this.generateBlocks(this.result, String(this.check));
						this.generateBlock(String(this.check));
						if (this.check === 0) {
							this.isShowModal = true;
						}
						else if (this.check === 1) {
							this.isShowModal = true;
						}
						else if (this.check === 2) {
							this.isShowModal = true;
						}
						else if (this.check === 3) {
							this.isShowModal = true;
						}
						else if (this.check === 4) {
							this.isWinModal = true;
						}
					}
					break;
				}
				break;
			}
		}
	}
}
