import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() playGame = new EventEmitter<number>();
  interval: any;
  gameState: number = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.playGame.emit(this.gameState + 1);
      this.gameState++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
