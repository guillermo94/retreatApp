import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../../utilities/models/card';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  @Input()
  public cardList: Card[];

  constructor() { }

  ngOnInit() {
  }

  public formatDate(date: Date): string {
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  }

}
