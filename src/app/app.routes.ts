import { Routes } from '@angular/router';
import { TablePageComponent } from './interfaces/table-page/table-page.component';
import { StartPageComponent } from './interfaces/start-page/start-page.component';
import { AddTeamPageComponent } from './interfaces/add-team-page/add-team-page.component';

export const routes: Routes = [
    {
        path: '',
        title: '',
        component: StartPageComponent,
        data: { animation: 'startPage' }
    },
    {
        path: 'table',
        title: '',
        component: TablePageComponent
    },
    {
        path: 'addteams',
        title: '',
        component: AddTeamPageComponent,
        data: { animation: 'addTeamPage' }

    }
];
