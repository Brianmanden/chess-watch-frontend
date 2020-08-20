import { Component, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private currentPlayer = 0;
  private numberOfPlayers = 4;
  // setInterval
  private gameTicker;
  private tickMillis = 100;

  public gameMessage: string;
  public playerTimes: number[] = [];
  public playingTime = 0;

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
      this.tickMillis,
      this.currentPlayer
    );
  }

  pauseGame(): void {
    clearInterval(this.gameTicker);
  }

  nextPlayer(playerTabs: MatTabGroup): void{
    if(!playerTabs || !(playerTabs instanceof MatTabGroup)) { return }
    this.currentPlayer = playerTabs.selectedIndex;
    
    if(this.currentPlayer == playerTabs._tabs.length - 1){
      this.currentPlayer = 0;
    }else{
      this.currentPlayer++;
    }

    playerTabs.selectedIndex = this.currentPlayer;
  }

  startGame(playingTime: number): void {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.playerTimes.push(playingTime * 60);
    }
    this.gameTicker = setInterval(
      this.ticker.bind(this),
      this.tickMillis,
      this.currentPlayer
    );
  }
}
