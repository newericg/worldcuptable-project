import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ required: true }) buttonText: string= ''

}
