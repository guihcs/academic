import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  constructor() {
    if (!this.socket) this.socket = io('localhost:3000/nspace');
  }
}
