import { Component, OnInit } from '@angular/core';
import { CameraService, CesiumService, ZoomToRectangleService } from 'angular-cesium';

@Component({
  selector: 'app-ztrect',
  templateUrl: './ztrect.component.html',
  styleUrls: ['./ztrect.component.css']
})
export class ZtrectComponent  {

  constructor(
    private cameraService: CameraService,
    private cesiumService: CesiumService,
    private zoomToRectangleService: ZoomToRectangleService,
  ) {
    this.zoomToRectangleService.init(cesiumService, cameraService);
  }
  zoomToRectangle() {
    this.zoomToRectangleService.activate();
  }
}
