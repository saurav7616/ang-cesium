import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AcEntity, CesiumEvent, CesiumEventModifier, CesiumService, EventRegistrationInput, KeyboardAction, KeyboardControlService, MapEventsManagerService, MapsManagerService, PickOptions, ViewerConfiguration } from 'angular-cesium';
import { MapLayerProviderOptions } from 'angular-cesium';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [KeyboardControlService, ViewerConfiguration, CesiumService,MapEventsManagerService]
})
export class AppComponent implements OnInit, OnDestroy {
  mapProvider = MapLayerProviderOptions.ArcGisMapServer
 constructor(
  private keyboardControlService: KeyboardControlService,
  private viewerConf: ViewerConfiguration,
  private cesiumService : CesiumService,
  // eventManager: MapEventsManagerService, 
  mapsManagerService: MapsManagerService,
  ngZone: NgZone)
  {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.ROTATE,
    };
    // const eventRegistration: EventRegistrationInput = {
    //   event: CesiumEvent.LEFT_CLICK, // event type enum. [required!]
      // modifier: CesiumEventModifier.CTRL, // event modifier enum. [optional]
      // entityType: AcEntity, // raise event only if AcEntity is clicked. [optional]
      // priority: 0, // event priority, default 0 . [optional]
      // pick: PickOptions.PICK_FIRST // entity pick option, default PickOptions.NO_PICK. [optional]
    // };
    // eventManager.register(eventRegistration).subscribe((result) => {
      // ngZone.run(()=>{
        // console.log(result)
      // });
  //  });
  // console.log(this.cesiumService.getViewer())
  // const viewer = mapsManagerService.getMap().getCesiumViewer();
   
 }
 ngOnInit() {
  console.log(this.keyboardControlService, KeyboardAction)
  // this.keyboardControlService.setKeyboardControls({
    // W: { action: KeyboardAction.CAMERA_FORWARD },
    // S: { action: KeyboardAction.CAMERA_BACKWARD },
    // D: { action: KeyboardAction.CAMERA_RIGHT },
    // A: { action: KeyboardAction.CAMERA_LEFT },
  // });
 }

ngOnDestroy() {
  this.keyboardControlService.removeKeyboardControls();
}
 features = ['circle', 'ellipse', 'hippodrome', 'point', 'polyline', 'polygon', 'rectangle', 'zoomToRect', 'range-bearing']
 selected_feature:any = ''
}
