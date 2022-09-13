import { Component, OnInit, ViewChild } from '@angular/core';
import { PolylineEditorObservable, RangeAndBearingComponent } from 'angular-cesium';

@Component({
  selector: 'app-rangebearing',
  templateUrl: './rangebearing.component.html',
  styleUrls: ['./rangebearing.component.css']
})
export class RangebearingComponent  {

  rnb: PolylineEditorObservable;
  @ViewChild('rangeAndBearing', {static: false}) 
    private rangeAndBearing: RangeAndBearingComponent;
    
  createRangeAndBearing() {
    this.disposeRangeAndBearing()
    this.rnb = this.rangeAndBearing.create({
      // style: { pointProps: { pixelSize: 12 } }, 
      bearingLabelsStyle: { fillColor: Cesium.Color.GREEN }
    });
  }
  
  disposeRangeAndBearing(){
    if (this.rnb) {
      this.rnb.dispose();
    }
  }

}
