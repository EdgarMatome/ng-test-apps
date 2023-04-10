import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'test Server';
  serverCreated = false;
  servers = ['test Server', 'another server', 'server 3'];
  showText = false;
  detailsClick = [];
  counter = 0;
  itemBg = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created!! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onShowText() {
    this.counter++;
    this.detailsClick.push(this.counter);
    console.log(this.detailsClick);
    return this.showText === false
      ? (this.showText = true)
      : (this.showText = false);
  }

  getBGColor() {
    // this.detailsClick[5] >= 5
    //     ? (this.itemBg = 'blue')
    //     : (this.itemBg = 'white');

    return this.detailsClick.forEach((e) => {
      e >= 5 ? 'blue' : 'white';
    });
  }
}
