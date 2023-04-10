import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Test server',
      content: 'This is just a server test!',
    },
  ];

  oddNumbers2 = [1, 3, 5];
  evenNumbers2 = [2, 4];
  onlyOdd = false;

  value = 'Lion';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Chnaged';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onGameStarted(gameUnit: number) {
    if (gameUnit % 2 === 0) {
      this.oddNumbers.push(gameUnit);
    } else {
      this.evenNumbers.push(gameUnit);
    }
    // gameUnit % 2 === 0
    //   ? this.evenNumbers.push(gameUnit)
    //   : this.oddNumbers.push(gameUnit);
  }
}
