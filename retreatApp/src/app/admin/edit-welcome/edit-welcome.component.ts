import {Component, OnInit} from '@angular/core';
import {Welcome} from '../../utilities/models/welcome';

@Component({
  selector: 'app-edit-welcome',
  templateUrl: './edit-welcome.component.html',
  styleUrls: ['./edit-welcome.component.scss']
})
export class EditWelcomeComponent implements OnInit {

  public welcome: Welcome = {
    title: 'Welcome',
    paragraph: 'some paragraph, some paragraph ,some paragraph'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
