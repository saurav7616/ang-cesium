import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core'
import { AcNotification, ActionType, CesiumService } from 'angular-cesium';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'; 
import {UfoServiceService} from '../ufo-service.service'


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit{
  ufos$: Observable<AcNotification>;
  private ufosPosition = new Map<string, any>();
  private initialTime;
  modelShow = true
  constructor(private UfoService: UfoServiceService,private cesiumService : CesiumService) {
    
  }
  road =  [
    [
      77.7108907699585,
      27.136795492871872
    ],
    [
      77.71125555038452,
      27.136623632222285
    ],
    [
      77.71164178848267,
      27.136509058309137
    ],
    [
      77.71215677261353,
      27.136318101526243
    ],
    [
      77.7128005027771,
      27.136069857220804
    ],
    [
      77.71353006362915,
      27.135649750217393
    ],
    [
      77.71440982818604,
      27.13526783338978
    ],
    [
      77.71488189697266,
      27.135038682666945
    ],
    [
      77.71548271179199,
      27.13459947580198
    ],
    [
      77.71604061126709,
      27.134217555386474
    ],
    [
      77.71666288375854,
      27.133835633666276
    ],
    [
      77.71722078323364,
      27.133434614455922
    ],
    [
      77.71780014038086,
      27.133052690061184
    ],
    [
      77.71827220916747,
      27.132919016214807
    ],
    [
      77.71848678588867,
      27.132651668042577
    ],
    [
      77.71883010864258,
      27.132327030116908
    ],
    [
      77.71953821182251,
      27.13183052323094
    ],
    [
      77.71983861923218,
      27.13167775143783
    ],
    [
      77.71998882293701,
      27.131353110684447
    ],
    [
      77.72039651870728,
      27.1308947927221
    ],
    [
      77.7207612991333,
      27.130436472881165
    ],
    [
      77.71983861923218,
      27.130130925276916
    ],
    [
      77.71921634674072,
      27.129920860814664
    ],
    [
      77.71810054779053,
      27.12938614949376
    ],
    [
      77.71745681762695,
      27.128870532584216
    ],
    [
      77.71653413772583,
      27.12822123383477
    ],
    [
      77.71589040756226,
      27.128106651311146
    ],
    [
      77.71505355834961,
      27.127839291632842
    ],
    [
      77.71448493003845,
      27.12762922286577
    ],
    [
      77.7142596244812,
      27.12753373693211
    ],
    [
      77.71384119987486,
      27.127209084147832
    ],
    [
      77.71361589431763,
      27.12713269512043
    ],
    [
      77.71313309669495,
      27.1274287023109
    ],
    [
      77.7128005027771,
      27.12744779952211
    ],
    [
      77.71212458610535,
      27.12731411897527
    ],
    [
      77.71159887313843,
      27.12710404922172
    ],
    [
      77.71133065223694,
      27.12731411897527
    ],
    [
      77.71085858345032,
      27.127409605096457
    ],
    [
      77.71060109138489,
      27.127180438268667
    ],
    [
      77.71013975143433,
      27.12691307637606
    ],
    [
      77.71000027656555,
      27.126636165170606
    ],
    [
      77.7097749710083,
      27.12630196107851
    ],
    [
      77.70920634269714,
      27.12627331496701
    ],
    [
      77.70869135856628,
      27.12636880197682
    ],
    [
      77.70821928977966,
      27.126378350673324
    ],
    [
      77.70791888236998,
      27.12626376626155
    ],
    [
      77.70751118659973,
      27.125920012321792
    ],
    [
      77.70733952522278,
      27.125557159794738
    ],
    [
      77.70726442337036,
      27.125175208494465
    ],
    [
      77.7070927619934,
      27.124841000036717
    ],
    [
      77.70703911781311,
      27.12442085084442
    ],
    [
      77.70704984664917,
      27.124191677892483
    ],
    [
      77.70703911781311,
      27.124019797870393
    ],
    [
      77.70695328712462,
      27.123656939178584
    ],
    [
      77.70683526992798,
      27.123360922005496
    ],
    [
      77.70735025405884,
      27.122616101136888
    ],
    [
      77.70788669586182,
      27.12189992254764
    ],
    [
      77.70809054374695,
      27.121766235369776
    ],
    [
      77.70819783210754,
      27.121441565844155
    ],
    [
      77.70819783210754,
      27.121155091950705
    ],
    [
      77.70803689956665,
      27.120687183013732
    ],
    [
      77.70779013633728,
      27.120305215083615
    ],
    [
      77.70751118659973,
      27.11981820408119
    ],
    [
      77.70772576332092,
      27.119464881046532
    ],
    [
      77.70817637443542,
      27.11927389515777
    ],
    [
      77.70842313766478,
      27.119035162338303
    ],
    [
      77.70868062973022,
      27.118796429009414
    ],
    [
      77.70874500274657,
      27.118452652120833
    ],
    [
      77.70888447761536,
      27.118061127155507
    ],
    [
      77.70892739295958,
      27.117803292893523
    ],
    [
      77.70900249481201,
      27.117516809683313
    ],
    [
      77.70893812179565,
      27.117163479380423
    ],
    [
      77.70893812179565,
      27.116857895515913
    ],
    [
      77.70892739295958,
      27.116619157541024
    ],
    [
      77.70901322364807,
      27.11632312174472
    ],
    [
      77.70914196968079,
      27.116007986004067
    ],
    [
      77.70922780036925,
      27.115463658543277
    ],
    [
      77.70924925804137,
      27.115253566534346
    ],
    [
      77.70939946174622,
      27.115033924466864
    ],
    [
      77.7094316482544,
      27.11471878509524
    ],
    [
      77.7096676826477,
      27.114470492843978
    ],
    [
      77.70978569984436,
      27.114212650307614
    ],
    [
      77.71006464958191,
      27.113964356933263
    ],
    [
      77.7102255821228,
      27.11356326647243
    ],
    [
      77.71030068397522,
      27.113248122958908
    ],
    [
      77.70944237709045,
      27.113066676290963
    ],
    [
      77.70862698554993,
      27.112675132478714
    ],
    [
      77.70762920379639,
      27.11245548535008
    ],
    [
      77.70673871040344,
      27.112140338716817
    ],
    [
      77.7052366733551,
      27.11168194202961
    ],
    [
      77.70336985588074,
      27.11096569344684
    ],
    [
      77.70207166671753,
      27.110765143022206
    ],
    [
      77.70126700401306,
      27.11020168990592
    ],
    [
      77.69996881484985,
      27.110010688205758
    ],
    [
      77.697833776474,
      27.109141626354248
    ],
    [
      77.69751191139221,
      27.10904612464035
    ]
  ]
  model = '../../assets/ufo/ufo.gltf'
  ngOnInit() {
    this.ufos$ = of(this.UfoService.getUfos()).pipe(
      map(ufo => ({
        id: ufo[0].id,
        actionType: ActionType.ADD_UPDATE,
        entity: ufo,
      }))
    );

  }
  
 
  interpolatePosition(entity) {
    const now = Date.now();
    const ufo = interpolate({
      data: Cesium.Cartographic.toCartesian(entity.position),
      time: this.initialTime + (now + TIME_ADDITION - this.initialTime) * TIME_MULTIPLIER,
      cesiumSampledProperty: this.ufosPosition.get(entity.id)
    }, InterpolationType.POSITION);

    this.ufosPosition.set(entity.id, ufo);

    return ufo;
  }

 
}


const TIME_MULTIPLIER = 1000;
const TIME_ADDITION = 1000 * TIME_MULTIPLIER;

export interface InterpolationInput {
  data: any;
  time?: Date | number;
  cesiumSampledProperty?: any;
  interpolationOptions?: any;
}
export enum InterpolationType {
  POSITION = Cesium.SampledPositionProperty,
  GENERAL = Cesium.SampledProperty,
}

export function interpolate(input: InterpolationInput, interpolationType = InterpolationType.GENERAL) {
  const time = input.time ? Cesium.JulianDate.fromDate(new Date(input.time)) : Cesium.JulianDate.now();
  const cesiumSampledProperty = input.cesiumSampledProperty || new (interpolationType as any)();
  if (!input.cesiumSampledProperty) {
    cesiumSampledProperty.forwardExtrapolationType = Cesium.ExtrapolationType.HOLD;
    cesiumSampledProperty.forwardExtrapolationDuration = 0;
    cesiumSampledProperty.backwardExtrapolationType = Cesium.ExtrapolationType.HOLD;
    cesiumSampledProperty.backwardExtrapolationDuration = 0;
    const interpolationOptions = input.interpolationOptions || {
      interpolationDegree: 1,
      interpolationAlgorithm: Cesium.LinearApproximation
    };
    cesiumSampledProperty.setInterpolationOptions(interpolationOptions);
  }
  cesiumSampledProperty.addSample(time, input.data);
  return cesiumSampledProperty;
}

