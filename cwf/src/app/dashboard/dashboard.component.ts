import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(this.ticker, 1000);
  }

  ticker(playerId?: string): void {
    console.log('tick');
  }

  onTabChange(event) {
    console.log(event.index);
    console.log(event.tab);
  }
}
