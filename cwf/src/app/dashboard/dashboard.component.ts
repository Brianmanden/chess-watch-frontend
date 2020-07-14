import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private currentPlayer: number = 0;
  private numberOfPlayers: number = 4;
  private gameTicker;

  public gameMessage: string;
  public playerTimes: number[] = [];
  public playingTime: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ticker(playerId?: string): void {
    this.playerTimes[playerId] > 0
      ? this.playerTimes[playerId]--
      : (this.gameMessage = 'GAME OVER - player: ' + playerId);
  }

  onTabChange(event): void {
    this.currentPlayer = event.index;
    clearInterval(this.gameTicker);
    this.gameTicker = setInterval(
      this.ticker.bind(this),
      1000,
      this.currentPlayer
    );
  }

  pauseGame(): void {
    clearInterval(this.gameTicker);
  }

  startGame(playingTime: number): void {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.playerTimes.push(playingTime * 60);
    }
    this.gameTicker = setInterval(
      this.ticker.bind(this),
      1000,
      this.currentPlayer
    );
  }
}
