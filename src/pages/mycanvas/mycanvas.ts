import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import * as x from '../../providers/videocenter';

/*
  Generated class for the Mycanvas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mycanvas',
  templateUrl: 'mycanvas.html'
})
export class MycanvasPage {
  private mouse : x.Mouse = x.mouse;
  itouch = '';
  constructor(
    public navCtrl: NavController, 
    private vc: x.Videocenter,
    private events: Events) {}

  ionViewDidLoad() {
    console.log('Hello MycanvasPage Page');
  } 
  onPan(ev) {
    console.log('onPan',ev);
    this.itouch = 'move';
  }
  onPanEnd(ev) {
    this.mouse.click = false;
    console.log('touchend',ev);
    this.itouch = 'panend';
  }

  onPress(ev) {
    this.mouse.click = true;
    console.log('touchstart',ev);
    this.itouch = 'press';
  }
  onTap(ev) {
    this.mouse.click = true;
    console.log('touchstart',ev);
    this.itouch = 'tap';
  } 
}
