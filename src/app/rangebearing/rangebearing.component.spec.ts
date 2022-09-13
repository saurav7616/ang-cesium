import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangebearingComponent } from './rangebearing.component';

describe('RangebearingComponent', () => {
  let component: RangebearingComponent;
  let fixture: ComponentFixture<RangebearingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangebearingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangebearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
