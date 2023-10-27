import { Square } from './square';

export class Board {
  squares: Square[] = [
    new Square(),
    new Square(),
    new Square(),
    new Square(),
    new Square(),
    new Square(),
    new Square(),
    new Square(),
    new Square(),
  ];
  gameIsRunning: boolean = true;
  index: number = 0;
  winner: 'X' | 'O' | null = null;
}
