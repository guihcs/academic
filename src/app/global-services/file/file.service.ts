import { Injectable } from '@angular/core';
import {BackendService} from '../backend/backend.service';
import {SessionService} from '../session/session.service';


class Chunk {
  files_id;
  n;
  data;

  constructor(file_id, n, data) {
    this.files_id = file_id;
    this.n = n;
    this.data = data;
  }
}

class FileDescriptor {
  length;
  chunkSize;
  filename;
  metadata;

  constructor(file: File, chunkSize, misc?) {
    this.chunkSize = chunkSize;
    this.length = file.size;
    this.filename = file.name;
    this.metadata = {
      type: file.type,
      misc
    };
  }
}


@Injectable({
  providedIn: 'root'
})
export class FileService {

  private fileReader = new FileReader();

  constructor(
    private backendService: BackendService
  ) {

  }

  async upload(fileList, misc?){

    const chunkSize = 1024 * 1024;
    let file: File = fileList[0];
    let descriptor = new FileDescriptor(file, chunkSize, misc);

    let insertionData: any = await this.backendService.writeFile(descriptor);

    let chunkCount = Math.floor(file.size / chunkSize);
    let i = 0;
    for(; i < chunkCount; i++){
      let min = i * chunkSize;
      let max = (i + 1) * chunkSize
      let data = await this.read(file, min, max);
      let chunk = new Chunk(insertionData.id, i, data)
      await this.backendService.writeChunk(chunk);
    }

    let min = i * chunkSize;
    let max = file.size;
    let data = await this.read(file, min, max);
    let chunk = new Chunk(insertionData.id, i, data)
    await this.backendService.writeChunk(chunk);

    console.log('ok');

  }


  private async read(file, min, max){
    let blob: Blob = file.slice(min, max);

    return new Promise((resolve, reject) => {
      this.fileReader.readAsDataURL(blob);
      this.fileReader.onload = ev => {
        resolve(ev.target.result);
      };

      this.fileReader.onerror = ev => {
        reject();
      }
    });
  }



  async download(descriptor){

    let chunkCount = Math.ceil(descriptor.length / descriptor.chunkSize);
    let blobParts = [];
    for (let i = 0; i < chunkCount; i++){
      let chunk:any = await this.backendService.readChunk(descriptor._id, i);
      let d = await (await fetch(chunk.chunk.data)).blob();

      blobParts.push(d);


    }

    return new Blob(blobParts, {type: descriptor.metadata.type});

  }


  async getAll(){
    return await this.backendService.getAll('files.files');
  }


}
