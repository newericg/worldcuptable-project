import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';



@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [ButtonComponent, CommonModule, FooterComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements OnInit {
  constructor(private router: Router) {
  }

  step: number = 1

  ngOnInit() {
    
  }


  onStart(valueEmiteed: any) {
    this.router.navigateByUrl('/addteams');
    console.log('VALUE', valueEmiteed)
  }



}
