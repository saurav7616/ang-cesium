import { Component, OnInit } from '@angular/core';
import { RectanglesEditorService,RectangleEditorObservable } from 'angular-cesium';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
  providers : [RectanglesEditorService]
})
export class RectangleComponent  {

  editing$: RectangleEditorObservable;
    
    constructor(private rectangleEditor: RectanglesEditorService) {}
    
    startEdit() {
         this.editing$ = this.rectangleEditor.create();
    }

    stopEdit() {
      if (this.editing$) {
        this.editing$.dispose();
        this.editing$ = undefined;
      }
    }
}
