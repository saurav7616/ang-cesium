import { Component, OnInit } from '@angular/core';
import { PolygonEditorObservable, PolygonsEditorService } from 'angular-cesium';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.css'],
  providers : [PolygonsEditorService]
})
export class PolygonComponent {

  editing$: PolygonEditorObservable;
    
    constructor(private polygonEditor: PolygonsEditorService) {}
    
    startEdit() {
         this.editing$ = this.polygonEditor.create();
    }

    stopEdit() {
      if (this.editing$) {
        this.editing$.dispose();
        this.editing$ = undefined;
      }
    }
}
