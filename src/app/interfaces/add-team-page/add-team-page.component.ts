import { Component, Input } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { MatListModule } from '@angular/material/list';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterOutlet } from '@angular/router';
import { TeamService } from '../../services/teamservice';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-team-page',
  standalone: true,
  imports: [FormComponent, MatListModule, ButtonComponent, RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './add-team-page.component.html',
  styleUrl: './add-team-page.component.scss'
})
export class AddTeamPageComponent {

  constructor(
    private router: Router,
    public teamService: TeamService
  ) {

  }

  loading: boolean = false
  teamList: string[] = ['brasil', 'italy', 'england', 'france', 'brasil', 'italy', 'england', 'france', 'brasil', 'italy', 'england', 'france',]
  championshipTable: { position: number, name: string }[] = []

  @Input() teamArray: string[] = []

  addTeamToList(item: string) {
    this.teamList.push(item)
    this.teamArray = this.teamList
  }

  resetList() {
    this.teamList = []
  }

  startChampionship() {
    this.addTeamsToTable()
    this.teamService.teamList = this.championshipTable 
    this.loading = true
    setTimeout(() => {
      this.router.navigate(['/table'])
      this.loading = false
    }, 1500)
  }

  addTeamsToTable() {
    this.teamList.map((team, index) => {
      let teamObj: { position: number, name: string } = {
        position: index + 1,
        name: team
      }
      this.championshipTable.push(teamObj)
    })
  }
}
