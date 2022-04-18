import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.scss'],
})
export class PipeExamplesComponent implements OnInit {
  book: any = {
    title: 'Programação Web com Node.js: Completo, do Front-end ao Back-end',
    rating: 4.5654,
    pages: 356,
    price: 14.99,
    releaseDate: new Date(2016, 5, 23),
  };

  constructor() {}

  ngOnInit(): void {}
}
