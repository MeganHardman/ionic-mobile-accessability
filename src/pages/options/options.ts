import { Component } from '@angular/core';
import {MobileAccessibility} from "@ionic-native/mobile-accessibility";


@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  textSize: number = 100;

  constructor(public mobileAccessibility: MobileAccessibility) {
  }

  onTextChange() {
    console.log(this.textSize);
    this.mobileAccessibility.setTextZoom(this.textSize);

  }

  onFromSettings() {
    this.mobileAccessibility.updateTextZoom();
    console.log('from settings clicked');
  }
}
