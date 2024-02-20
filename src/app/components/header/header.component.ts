import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItens: {name: string, link: string}[] = [
    {
      'name': 'New Championship',
      'link': '/'
    },
    {
      'name': 'World Cup News',
      'link': '/table'
    },
    
  ]

}
