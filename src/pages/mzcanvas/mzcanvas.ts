import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';


/*
  Generated class for the Mycanvas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mzcanvas',
  templateUrl: 'mzcanvas.html'
})
export class MZcanvasPage {
  dmode;
  dsize;
  dcolor;
  DrawMode;
  DrawSize;
  DrawColor;
  constructor(
    public navCtrl: NavController,
    private events: Events) {}

 onClickClear() {
   this.events.publish( 'clear-canvas' );
 }     
}
