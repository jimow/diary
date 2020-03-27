import { Component } from '@angular/core';
import { Diary } from './diary';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diary';
  diary:Diary[] = [
    new Diary('Meeting at Moring',new Date(2019,0,18)),
    new Diary('Submission of Weekly IPs', new Date(2020,1,21)),
    new Diary('Moringa Core Graduation', new Date(2020,5,30)),
  ];

}
