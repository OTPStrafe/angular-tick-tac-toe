import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public winMap = [123, 456, 789, 147, 258, 369, 357, 159];
  
  constructor() { }
 
  checkWin(board: Array<number>): number {
    const moves = board.reduce((players, v, i) => {
      if(v) players[v-1] += i+1
      return players;
    }, ["", ""])

    const winningMove = this.winMap.find(comb =>
      moves.some(m =>
        comb.toString().split('').every(c => m.includes(c))
      )
    )
    return board[parseInt(winningMove?.toString()[0] as string) - 1] ? board[parseInt(winningMove?.toString()[0] as string) - 1] : 0;
  }
}
