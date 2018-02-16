import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {OptionsPage} from "../options/options";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photos : any[] = [];

  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  onTakePhoto() {
    console.log('clicked Take Photo');
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }

  onOptions() {
    this.navCtrl.push(OptionsPage);
  }
}

