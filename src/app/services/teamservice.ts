import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class TeamService {

    teamList: { position: number, name: string }[] = []
}