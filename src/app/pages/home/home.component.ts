import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/data/games.data';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
		this.games = this.gameService.find();
  }

}
