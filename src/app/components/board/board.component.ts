import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board';
import { Configuration } from 'src/app/models/configuration';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: Board = new Board();
  @Input() index: number = 0;
  @Output() verifyIfBoardIndexIsRunning: EventEmitter<number> =
    new EventEmitter<number>();
  configuration: Configuration = new Configuration();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.board.index = this.index;
  }

  get game(): GameService {
    return this.gameService;
  }

  public emitBoardIndex(index: number) {
    this.verifyIfBoardIndexIsRunning.emit(index);
  }
}
