import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { StartPageComponent } from "./interfaces/start-page/start-page.component";
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { slideInAnimation } from './utils/animations';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, StartPageComponent, AngularMaterialModule, HeaderComponent],
    animations: [
      // slideInAnimation
    ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  title = 'worldcup-project';

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
