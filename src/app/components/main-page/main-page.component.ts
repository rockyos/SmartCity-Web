import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items = [
    {value: 1, text: 'Транспорт'},
    {value: 2, text: 'Состояние дорог'},
    {value: 3, text: 'Благоустройство'},
    {value: 4, text: 'Газоснабжение'},
    {value: 5, text: 'Электроснабжение'},
    {value: 6, text: 'Водоснабжение'},
    {value: 7, text: 'Подача'}
  ]
  constructor() { }

  ngOnInit() {
  }

  onLoad(myIframe){
  }

}
