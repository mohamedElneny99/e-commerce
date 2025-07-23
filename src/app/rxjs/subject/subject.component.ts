import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    const subject = new ReplaySubject();

    subject.next(1);
    subject.next(2);
    subject.next(3);

    subject.subscribe((value)=>{console.log("value1 " + value)})
    subject.subscribe((value)=>{console.log("value2 " + value)})
    subject.subscribe((value)=>{console.log("value3 " + value)})

    subject.next(4);
    subject.next(5);
    subject.subscribe((value)=>{console.log(value)})
    subject.subscribe((value)=>{console.log(value)})
  }


}
