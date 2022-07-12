import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pothole-ui';
  buttonClicks = 0;
  displayString = 'Potholes Detected: ' + this.buttonClicks;

  onButtonClick() {
    this.buttonClicks++;
    this.displayString = 'Potholes Detected: ' + this.buttonClicks;
  }

}
