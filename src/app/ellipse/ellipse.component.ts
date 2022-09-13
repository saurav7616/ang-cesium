import { Component, OnInit } from '@angular/core';
import { CoordinateConverter, EllipseEditorObservable, EllipseEditUpdate, EllipsesEditorService, LabelProps } from 'angular-cesium';

@Component({
  selector: 'app-ellipse',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css'],
  providers: [EllipsesEditorService],
})
export class EllipseComponent  {
  editing_e$: EllipseEditorObservable;
  constructor(private ellipsesEditor: EllipsesEditorService,
    private coordinateConverter: CoordinateConverter) {
      // ellipsesEditor.edit()

  }
  startEdit() {
    if (this.editing_e$) {
      this.stopEdit();
    }
    this.editing_e$ = this.ellipsesEditor.create( );
    this.editing_e$.setLabelsRenderFn((update: EllipseEditUpdate) => {
      const newLabels: LabelProps[] = [];
      newLabels.push(
        {text: ''},
        {
          text: Math.round(update.majorRadius).toString() + 'm',
          scale: 0.5,
          fillColor: Cesium.Color.BLUE,
        },
      );

      if (update.minorRadius > 0) {
        newLabels.push({
          text: Math.round(update.majorRadius).toString() + 'm',
          scale: 0.5,
          fillColor: Cesium.Color.RED,
        });
      }
      return newLabels;
    });
  }

  stopEdit() {
    if (this.editing_e$) {
      this.editing_e$.dispose();
      this.editing_e$ = undefined;
    }
  }
}
