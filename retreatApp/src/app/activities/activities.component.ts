import {Component, OnInit} from '@angular/core';
import {Card} from '../utilities/models/card';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  public activityList: Card[] = [{
    title: 'Yoga para principiantes',
    startDate: new Date(2019, 11, 12),
    endDate: new Date(2019, 11, 22),
    content: 'En este curso se ralizarán las siguientes activdades....'
  }, {
    title: 'Atención plena',
    content: 'En este curso se ralizarán las siguientes activdades....'
  }, {
    title: 'Descanso de la mente',
    content: 'En este curso se ralizarán las siguientes activdades....'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
