import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.scss'],
})
export class PipeExamplesComponent implements OnInit {
  book: any = {
    title: 'PrOgramaÇão WEB com Node.js: COMPLETO, do Front-end aO BACK-END',
    rating: 4.5654,
    pages: 356,
    price: 14.99,
    releaseDate: new Date(2016, 5, 23),
  };

  constructor() {}

  ngOnInit(): void {}
}
