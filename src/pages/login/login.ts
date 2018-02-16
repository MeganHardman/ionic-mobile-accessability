import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import { AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";
import {OptionsPage} from "../options/options";



@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	username: string = '';
	password: string = '';

	constructor(public navCtrl: NavController, public navParams: NavParams, public androidFingerprintAuth: AndroidFingerprintAuth) {
	}


	onLogin(){
		if (this.password === 'Password' && this.username === 'Megan') {
			this.navCtrl.push(HomePage);
			this.password = '';
			this.username = '';
		} else {
			this.password = '';
			this.username = '';
		}
	}

	fingerprintLogin(){
		this.androidFingerprintAuth.isAvailable()
			.then(result=> {
				if(result.isAvailable){
					//console.log('fingerprint login available')

					this.androidFingerprintAuth.encrypt({ clientId:'PhotoApp' })
						.then((result)=> {
              if (result.withFingerprint) {
                //console.log('Successfully encrypted credentials.');
                //console.log('Encrypted credentials: ' + result.token);
                this.navCtrl.push(HomePage);
              } else if (result.withBackup) {
                //console.log('Successfully authenticated with backup password!');
                this.navCtrl.push(HomePage);
              } else console.log('Didnt authenticate!');
            })
						.catch(error => {
							if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
								console.log('Fingerprint authentication cancelled');
							} else console.error(error)
						});
				}
			})
			.catch(error => {
				if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
					console.log('Fingerprint authentication cancelled');
				} else console.error(error)
			});
	}

	onOptions() {
    this.navCtrl.push(OptionsPage);
  }
}
