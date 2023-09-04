import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  configuration: Configuration = new Configuration();
  board: Board = new Board();
  playerTurn: string;
  gameIsRunning: boolean;

  constructor() {
    this.newGame();
    this.playerTurn = this.configuration.playerStart;
    this.gameIsRunning = true;
  }

  public changePlayersTurn(): void {
    if (
      this.checkRows(this.board, 'row') ||
      this.checkRows(this.board, 'col') ||
      this.checkDiagonals()
    )
      this.gameIsRunning = false;
    this.playerTurn == 'X' ? (this.playerTurn = 'O') : (this.playerTurn = 'X');
  }

  private newGame(): void {
    this.board.squares = this.board.newGame();
  }

  private checkRows(board: Board, mode: string): boolean {
    const ROW = mode === 'row' ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC) {
      let firstSquare = board.squares[i].value,
        secondSquare = board.squares[i + DIST].value,
        thirdSquare = board.squares[i + DIST * 2].value;

      if (firstSquare && secondSquare && thirdSquare) {
        if (firstSquare === secondSquare && secondSquare === thirdSquare)
          return true;
      }
    }
    return false;
  }

  private checkDiagonals(): boolean {
    const timesRun = 2,
      midSquare = this.board.squares[4].value;

    for (let i = 0; i <= timesRun; i += 2) {
      let upperCorner = this.board.squares[i].value,
        lowerCorner = this.board.squares[8 - i].value;

      if (midSquare && upperCorner && lowerCorner) {
        if (midSquare === upperCorner && upperCorner === lowerCorner)
          return true;
      }
    }

    return false;
  }
}
