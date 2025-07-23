import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  subject = new Subject<any>();

  addItem(item: any) {
    this.subject.next(item)
  }
}
