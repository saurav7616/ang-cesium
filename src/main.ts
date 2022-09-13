import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');
Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZDEwNGE5Zi1iNGM2LTQ5ODYtODAwYy03ZjVlNTg1YWQ3YWQiLCJpZCI6MTA0MjAxLCJpYXQiOjE2NjAwNDM2ODV9.4cGMEcV0JocBYzhWUmIL9IqV7T_mUGmcCzdZn7ir6sI";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
