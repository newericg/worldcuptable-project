import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import {MatListModule} from '@angular/material/list';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-add-team-page',
  standalone: true,
  imports: [FormComponent, MatListModule, ButtonComponent],
  templateUrl: './add-team-page.component.html',
  styleUrl: './add-team-page.component.scss'
})
export class AddTeamPageComponent {
  
  teamList: string[] = ['brasil', 'italy', 'england', 'france', 'brasil', 'italy', 'england', 'france', 'brasil', 'italy', 'england', 'france',]

  addTeamToList(item: string) {
    this.teamList.push(item)
  }

  resetList() {
    this.teamList = []
  }

}
