import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Coordinates } from '../coordinates';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor(private service: DataServiceService, private router:Router) {


   }

  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  markerOptions: google.maps.MarkerOptions = {draggable: false};

  markerPositions: google.maps.LatLngLiteral[] = [];

  response: Coordinates[] = []

  async ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })

    //this.markerPositions = this.service.getDataObject();

    await this.service.getData().then((coordinates) => this.response = coordinates as Coordinates[])
    await this.response.forEach((coordinate) =>  this.markerPositions.push(new google.maps.LatLng(coordinate.lat, coordinate.long).toJSON()))
  }


  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
