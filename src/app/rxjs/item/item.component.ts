import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-item',
  imports: [CommonModule , FormsModule   ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  constructor(private rxjsService: RxjsService) { }

  itemName: string = '';

  addItem(){
    this.rxjsService.addItem(this.itemName)
    console.log(this.itemName)

  }

}
