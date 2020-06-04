import {Injectable} from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PDFService {

  private doc;
  private line = 10;

  constructor() { }

  start(){
    this.doc = new jsPDF();


  }


  nextLine(text){
    this.doc.text(text, 10, this.line);
    this.line += 10;
  }

  grid(vals){

    let columnStart = 10;

    for (const val of vals) {
      this.doc.text(val.toString(), columnStart, this.line);
      columnStart += 50;
    }


    this.line += 10;
  }


  save(title){
    this.doc.save(title);
  }

  async open(){

    let output = this.doc.output('blob', {
      filename: 'generated.pdf'
    });

    let url = window.URL.createObjectURL(output);
    window.open(url);
    window.URL.revokeObjectURL(url);
    this.line = 10;
  }
}
