import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { Configuration } from 'src/app/models/configuration';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() board: Board = new Board();
  configuration: Configuration = new Configuration();
  playerTurn: string = 'X';
  gameIsRunning: boolean = true;
  constructor(private gameService: GameService) {}

  get game(): GameService {
    return this.gameService;
  }
}
