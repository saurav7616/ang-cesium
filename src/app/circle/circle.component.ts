import { Component, OnInit } from '@angular/core';
import { CirclesEditorService,CircleEditorObservable } from 'angular-cesium';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
  providers: [CirclesEditorService],
})
export class CircleComponent  {

  editing$: CircleEditorObservable;
    
  constructor(private circleEditor: CirclesEditorService) {}
  
  startDraw() {
       this.editing$ = this.circleEditor.create();
  }
  stopEdit() {
    if (this.editing$) {
      this.editing$.dispose();
      this.editing$ = undefined;
    }
  }
}
