import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  title = "My Diary";
  diary:Diary[] = [
    new Diary('Meeting at Moring',new Date(2021,0,18)),
    new Diary('Submission of Weekly IPs', new Date(2020,4,5)),
    new Diary('Moringa Core Graduation', new Date(2020,5,30)),
  ];
  addNewDiary(goal){
    
    goal.completeDate = new Date(goal.completeDate)
    this.diary.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
