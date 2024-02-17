import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';


@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

}
