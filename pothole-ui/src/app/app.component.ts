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
  public lat = 0;
  public long = 0;


  onButtonClick() {
    this.buttonClicks++;
    this.getCurrentLocation();
    this.displayString = 'Position: ' + this.lat + ', ' + this.long;
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
