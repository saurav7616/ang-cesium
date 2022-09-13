import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { BillboardComponent } from './billboard/billboard.component';
import { CircleComponent } from './circle/circle.component';
import { EllipseComponent } from './ellipse/ellipse.component';
import { HippodromeComponent } from './hippodrome/hippodrome.component';
import { PointComponent } from './point/point.component';
import { PolylineComponent } from './polyline/polyline.component';
import { PolygonComponent } from './polygon/polygon.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ZtrectComponent } from './ztrect/ztrect.component';
import { RangebearingComponent } from './rangebearing/rangebearing.component';
import { ModelComponent } from './model/model.component';
import { HtmlComponent } from './html/html.component';

@NgModule({
  declarations: [
    AppComponent,
    BillboardComponent,
    CircleComponent,
    EllipseComponent,
    HippodromeComponent,
    PointComponent,
    PolylineComponent,
    PolygonComponent,
    RectangleComponent,
    ZtrectComponent,
    RangebearingComponent,
    ModelComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
