import { Component} from '@angular/core';
import { PointEditorObservable, PointsEditorService } from 'angular-cesium';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css'],
  providers: [PointsEditorService],
})
export class PointComponent  {

  editing$: PointEditorObservable;
    
  constructor(private pointEditor: PointsEditorService) {}
  
  startEdit() {
       this.editing$ = this.pointEditor.create();
  }

  stopEdit() {
    if (this.editing$) {
      this.editing$.dispose();
      this.editing$ = undefined;
    }
  }

}
