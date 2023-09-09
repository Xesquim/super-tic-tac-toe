import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  lastSquarePlayed: number | null = null;
  playerTurn: 'X' | 'O' = 'X';
  public changePlayersTurn(board: Board): boolean {
    if (
      this.checkRows(board, 'row') ||
      this.checkRows(board, 'col') ||
      this.checkDiagonals(board)
    )
      return false;
    return true;
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

  private checkDiagonals(board: Board): boolean {
    const timesRun = 2,
      midSquare = board.squares[4].value;

    for (let i = 0; i <= timesRun; i += 2) {
      let upperCorner = board.squares[i].value,
        lowerCorner = board.squares[8 - i].value;

      if (midSquare && upperCorner && lowerCorner) {
        if (midSquare === upperCorner && upperCorner === lowerCorner)
          return true;
      }
    }

    return false;
  }
}
