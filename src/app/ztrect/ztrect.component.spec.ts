import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtrectComponent } from './ztrect.component';

describe('ZtrectComponent', () => {
  let component: ZtrectComponent;
  let fixture: ComponentFixture<ZtrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
