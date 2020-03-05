import { Component,ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  template:
`<h5>
Message from Parent : {{parentstr}} <br>
Message from Child [@Output] : {{messagefromChild}}  <br>
Message from Child [@ViewChild] : {{viewchild}}
</h5>

<hello [childstr] = 'parentstr' (childevent) = "parent($event)"> </hello><br>

<h4>Difference btween Output and ViewChild:<h4>
<p>Output : Shares output data via event [on click/change]<p>
<p>ViewChild : Shares output data from child without doing<p>

<img width="560" height="249" #myimg *ngIf="isShow" src="https://i.ytimg.com/vi/M9ctBliiq1A/maxresdefault.jpg"/>`

})

export class AppComponent implements AfterViewInit {
  @ViewChild( HelloComponent,{static : false} ) childRef; //use variable from other component
  @ViewChild("myimg",{static : false}) elementView: ElementRef; //native HTML Element
  parentstr = 'I am from parent';
  messagefromChild : string;
  viewchild : string;
  isShow = true;
  constructor( private cdr: ChangeDetectorRef ) {}

  parent(event) {
  this.messagefromChild = event;
  }
  
  ngAfterViewInit() {
    this.viewchild = this.childRef.example;
    this.cdr.detectChanges(); //used to detect changes imm and avoid expression checked err
    console.log(this.elementView);
    console.log(this.childRef);

  }
  


}
