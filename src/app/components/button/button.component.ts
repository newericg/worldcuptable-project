import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [MatButtonModule, RouterModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {

	@Input({ required: true }) buttonText: string = ''
	@Input() buttonValue: any = ''
	@Input() linkTo: string = ''


	@Output() onClick: EventEmitter<any> = new EventEmitter();

	onButtonClick() {
		this.onClick.emit(this.buttonValue)
	}

}
