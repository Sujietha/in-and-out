import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'hello',
  template: `<div (click) = 'child()'>Message in Child : {{childstr}} [click me to send message to parent]</div>`  
})
export class HelloComponent  {
  @Input() childstr: string;
  @Output() childevent = new EventEmitter<string>(); 
  example: string = 'I am from child';
  child() {
  this.childevent.emit(this.example);
  }
}
