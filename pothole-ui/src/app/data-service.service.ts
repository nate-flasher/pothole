import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  markerPositions: google.maps.LatLngLiteral[] = [];

  setDataObject(obj: google.maps.LatLngLiteral[]) {
    this.markerPositions = obj;
  }

  getDataObject(): google.maps.LatLngLiteral[] {
    return this.markerPositions;
  }
}
