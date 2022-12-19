import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  public board: Array<0 | 1 | 2> = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]
  public isPlayerTurn: boolean = true;
  winningPlayer: number = 0;

  constructor(private gameService: GameService) {}

  restartGame() {
    this.board = [0,0,0,0,0,0,0,0,0];
    this.winningPlayer = 0;
    this.isPlayerTurn = true;
  }

  onClick(index: number) {
    if(this.board[index] !== 0 || this.winningPlayer > 0) return;
    if(!this.isPlayerTurn) {
      this.board[index] = 2
      this.isPlayerTurn = true;
      this.winningPlayer = this.gameService.checkWin(this.board);
    } else {
      this.board[index] = 1;
      this.isPlayerTurn = false;
      this.winningPlayer = this.gameService.checkWin(this.board);
    }
  }
}
