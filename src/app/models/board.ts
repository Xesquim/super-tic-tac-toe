import { Square } from './square';

export class Board {
  squares: Square[] = [];

  public newGame(): Square[] {
    let squares: Square[] = [];
    for (let i = 0; i < 9; i++) {
      squares.push(new Square());
    }
    return squares;
  }
}
