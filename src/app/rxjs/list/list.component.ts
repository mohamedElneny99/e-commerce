import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  constructor(private rxjsService: RxjsService) { }
  list: string[] = ['Item 1', 'Item 2', 'Item 3'];

  ngOnInit() {
    this.rxjsService.subject.subscribe((value)=>{
      this.list.push(value)
      console.log(this.list)
    })
  }

}
