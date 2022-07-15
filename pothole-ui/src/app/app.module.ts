import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component'

import { GoogleMapsModule } from '@angular/google-maps'

import { DataServiceService } from './data-service.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    GoogleMapsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
