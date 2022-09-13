import { Component, OnInit, ViewChild } from '@angular/core';
import { AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  @ViewChild(AcLayerComponent, {static: false}) layer: AcLayerComponent;
  htmls$: Observable<AcNotification>;

  html1 = {
    id: '0',
    actionType: ActionType.ADD_UPDATE,
    entity: {
      id: '0',
      show: true,
      name: 'Html 1',
      position: Cesium.Cartesian3.fromDegrees(-100, 30),
      color: Cesium.Color.RED
    },
  };
  constructor() {
    const htmlArray = [this.html1];
    this.htmls$ = from(htmlArray);
  }

  ngOnInit(): void {
  }

}
