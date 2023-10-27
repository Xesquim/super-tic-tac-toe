import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-super-board',
  templateUrl: './super-board.component.html',
  styleUrls: ['./super-board.component.scss'],
})
export class SuperBoardComponent {
  superBoard: Board[] = [
    new Board(),
    new Board(),
    new Board(),
    new Board(),
    new Board(),
    new Board(),
    new Board(),
    new Board(),
    new Board(),
  ];
  constructor(private gameService: GameService) {}

  public verifyIfBoardIndexIsRunning(index: number) {
    if (!this.superBoard[index].gameIsRunning) {
      this.gameService.lastSquarePlayed = null;
    }
  }
}
