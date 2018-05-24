import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { ModismoPage } from '../modismo/modismo';


@Component({
  selector: 'page-metropolitana',
  templateUrl: 'metropolitana.html'
})
export class MetropolitanaPage {

  map: GoogleMap;
  public  messageError_Map;
  public isPC:Boolean;
  firstLoad: boolean = true;
  mapReady: boolean = false;
  public lat;
  public lng;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public platform: Platform) {

      this.messageError_Map = "No se puede cargar el mapa en PC";
     }
 ionViewDidLoad(){
   if(!this.platform.is('core')){
      this.loadMap();
   } else {
     this.isPC = true;
   }

 }
  loadMap(){
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -33.4805952,
          lng: -70.7560083
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      this.mapReady = true;
      this.getPosition();
    })
    .catch(error => {
      alert("ERROR - CREAR MAPA");
    });
  }

  ionViewWillLeave(){
    this.map.setDiv(null);
  }

  ionViewDidEnter(){
    if(!this.firstLoad){
      this.map.setDiv('map_canvas');
      this.getPosition();
    } else {
      this.firstLoad = false;
    }
  }
  getPosition(){
    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      this.map.addMarker({
        title: "Mi Posición",
        icon: "blue",
        animation: "DROP",
        position: response.latLng
      });
    })
    .catch(error => {
      alert("ERROR - OBTENER POSICIÓN");
    });
  }

  goToModismo(){
    this.navCtrl.push(ModismoPage);
  }

  irAInacap(){
    this.map.moveCamera({
      target: {
        lat: -33.4805997,
        lng: -70.75791
      }
    });
    this.map.addMarker({
      title: "Inacap Maipú",
      icon: "red",
      animation: "DROP",
      position: {
        lat: -33.4805997,
        lng: -70.75791
      }
    });
  }
}
