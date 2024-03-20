import { Component } from '@angular/core';
import { TeamService } from '../../services/teamservice';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.scss'
})
export class TablePageComponent {
  constructor(public teamService: TeamService) { }

  displayedColumns: string[] = ['position', 'name',];

  championshipTable: { position: number, name: string }[] = []

  ngOnInit() {
    this.championshipTable = this.teamService.teamList
    console.log(this.teamService.teamList)
  }

}
