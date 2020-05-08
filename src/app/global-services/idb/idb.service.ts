import { Injectable } from '@angular/core';
import {openDB} from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IdbService {

  constructor() {
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
    }
  }


  async use(){
    let db = await openDB('test', 1, {
      upgrade(db){
        db.createObjectStore('test-store');
      }
    });

    let res = await db.get('test-store', 12);

    if(!res){
      let tx = db.transaction('test-store', 'readwrite');

      tx.store.add({
        name: 'hue'
      }, 12);
      res = tx.store.get(12);
      await tx.done;
    }else {
      await db.put('test-store', {age: 15}, 12);
    }
    console.log(res);

  }
}
