import { Injectable } from '@angular/core';
import { Game, games } from '../data/games.data';

@Injectable({
  providedIn: 'root'
})
export class GameService {
	private _games: Game[] = [];

  constructor() {
		this._games = games;
	}

	find() {
		return this._games;
	}
}
