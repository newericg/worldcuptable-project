import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { StartPageComponent } from "./interfaces/start-page/start-page.component";
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, StartPageComponent, AngularMaterialModule, HeaderComponent,FooterComponent],
    animations: [
      // slideInAnimation
    ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  title = 'worldcup-project';

}
