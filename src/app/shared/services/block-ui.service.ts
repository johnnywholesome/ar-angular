import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  display(value: boolean) {
      this.status.next(value);
  }

}
