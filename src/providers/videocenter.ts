
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Events } from 'ionic-angular';

export const LobbyRoomName: string = 'Lobby';
export interface USER {
    name: string;
    room: string;
    socket: string
    type: string;
}
export interface MESSAGE {
    message: string;
    name: string;
    room: string;
}
export interface Mouse {
    click: boolean;
    move: boolean;
    pos: { x:number | string, y:number | string };
    pos_prev: { x: number | string, y: number | string };
}
export let mouse: Mouse = {
        click: false,
        move: false,
        pos: { x:0, y: 0},
        pos_prev: { x: 0, y: 0 }
}

import { Storage } from '@ionic/storage';
@Injectable()
export class Videocenter {

  constructor(
    private storage: Storage,
    private events: Events
   ) {
    console.log('Hello Videocenter Provider');
  }
 
}