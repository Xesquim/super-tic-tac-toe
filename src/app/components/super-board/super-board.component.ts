import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';

@Component({
  selector: 'app-super-board',
  templateUrl: './super-board.component.html',
  styleUrls: ['./super-board.component.scss'],
})
export class SuperBoardComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
