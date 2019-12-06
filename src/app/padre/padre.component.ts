import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  @Input() saludo: string;
  @Input() valor: number;
         saludo2: string;

  constructor() { }

  ngOnInit() {
   
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }


}
