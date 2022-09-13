import { Component, OnInit } from '@angular/core';
import { PolylineEditorObservable, PolylinesEditorService } from 'angular-cesium';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.component.html',
  styleUrls: ['./polyline.component.css'],
  providers : [PolylinesEditorService]
})
export class PolylineComponent  {

  editing$: PolylineEditorObservable;
    
    constructor(private polylineEditor: PolylinesEditorService) {}
    
    startEdit() {
      this.editing$ = this.polylineEditor.create();
    }

    stopEdit() {
      if (this.editing$) {
        this.editing$.dispose();
        this.editing$ = undefined;
      }
    }
}
