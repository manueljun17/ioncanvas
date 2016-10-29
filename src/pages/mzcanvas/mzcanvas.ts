import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import * as x from '../../providers/videocenter';

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
  private mouse : x.Mouse = x.mouse;
  private drawsize;
  constructor(
    public navCtrl: NavController, 
    private vc: x.Videocenter,
    private events: Events) {}
 updateSelectedValue(ev) {
   console.log(ev);
   this.drawsize = ev;
 }
 onClickClear() {
   this.events.publish( 'clear-canvas' );
 }     
}
