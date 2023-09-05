import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board';
import { Square } from 'src/app/models/square';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() board: Board = new Board();
  @Input() square: Square = new Square();
  @Input() playerTurn: string = 'X';
  @Output() playerTurnEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  @Input() gameIsRunning: boolean = true;
  @Output() gameIsRunningEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private gameService: GameService) {}

  get game(): GameService {
    return this.gameService;
  }

  public squareClick(): void {
    if (!this.gameIsRunning || this.square.value) return;

    this.square.value = this.playerTurn;
    this.gameIsRunningEmitter.emit(
      this.gameService.changePlayersTurn(this.board)
    );

    this.playerTurnEmitter.emit(this.playerTurn == 'X' ? 'O' : 'X');
  }
}
