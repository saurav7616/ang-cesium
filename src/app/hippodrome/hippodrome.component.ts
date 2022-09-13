import { Component, OnInit } from '@angular/core';
import { EditActions, HippodromeEditorObservable, HippodromeEditorService, HippodromeEditUpdate } from 'angular-cesium';

@Component({
  selector: 'app-hippodrome',
  templateUrl: './hippodrome.component.html',
  styleUrls: ['./hippodrome.component.css'],
  providers: [HippodromeEditorService],
})
export class HippodromeComponent  {
  editing$: HippodromeEditorObservable;
  constructor(private hippodromeEditor: HippodromeEditorService) {
  }
  startEdit() {
    if (this.editing$) {
      this.stopEdit();
    }
    this.editing$ = this.hippodromeEditor.create({
      hippodromeProps: {
        outline: true,
        outlineWidth: 2,
      },
    });
    this.editing$.subscribe((editUpdate: HippodromeEditUpdate) => {

      if (editUpdate.editAction === EditActions.DRAG_POINT || editUpdate.editAction === EditActions.ADD_POINT) {
        console.log('width', this.editing$.getCurrentWidth());
        console.log('positions', this.editing$.getCurrentPoints());

        // or
        console.log('width', editUpdate.width);
        console.log('positions', editUpdate.points); // cartesian3
      }
    });
  }

  stopEdit() {
    this.editing$.dispose();
  }

}
