import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UfoServiceService {

 
  private ufos = [
    {
      id: '1',
      show : true,
      position: Cesium.Cartesian3.fromDegrees(77,28,2500),
      name: 'ufo',
      uri: '../assets/ufo/ufo.gltf',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png'
    }
  ];

  getUfos() {
    // Or get it from a real updating data source
    return this.ufos;
  }


  
}
