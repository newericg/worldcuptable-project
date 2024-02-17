import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartPageComponent } from "./interfaces/start-page/start-page.component";
import { AngularMaterialModule } from './angular-material/angular-material.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, StartPageComponent, AngularMaterialModule]
})
export class AppComponent {
  title = 'worldcup-project';
}
