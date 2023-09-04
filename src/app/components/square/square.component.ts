import { Component, Input, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() square: Square = new Square();

  constructor(private gameService: GameService) {}

  get game(): GameService {
    return this.gameService;
  }

  public squareClick(): void {
    console.log('ALOU CLIQUEI E SOU O: ' + this.gameService.playerTurn);
    if (!this.gameService.gameIsRunning || this.square.value) return;

    this.square.value = this.gameService.playerTurn;
    this.gameService.changePlayersTurn();
  }
}
