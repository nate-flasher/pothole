import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Coordinates } from './coordinates';
import { addDoc, Firestore, collection, getDocs, collectionData } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  response: any;

  coordinates?: Observable<any[]>

  constructor(private firestore: Firestore, private otherFirestore: AngularFirestore) {
    //this.coordinates = otherFirestore.collection('coordinates').valueChanges() as Observable<Coordinates[]>
  }



  markerPositions: google.maps.LatLngLiteral[] = [];


  setDataObject(obj: google.maps.LatLngLiteral[]) {
    this.markerPositions = obj;
  }

  getDataObject(): google.maps.LatLngLiteral[] {
    return this.markerPositions;
  }

  addData(value: any) {

    const dbInstance = collection(this.firestore, 'coordinates');
    addDoc(dbInstance, value);
  }

  async getData(): Promise<any[]> {

    const dbInstance = collection(this.firestore, 'coordinates');
    const docs = await getDocs(dbInstance);
    const response: any[] = []
    docs.forEach((doc) => response.push(doc.data()))
    return response

    /*
    then((response) => {
      console.log(response)

      console.log(response.docs.map((coords) => {
        return { ...coords.data() }
      }))

    })
    return of([])
    */
    /*
    const dbInstance = collection(this.firestore, 'coordinates');
    this.coordinates = collectionData(dbInstance);
    return this.coordinates;
    */
    //this.otherFirestore.collection('coordinates').valueChanges().subscribe(result => console.log(result));
    //return this.otherFirestore.collection('coordinates').valueChanges() as Observable<Coordinates[]>

  }

}
