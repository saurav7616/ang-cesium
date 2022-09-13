import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HippodromeComponent } from './hippodrome.component';

describe('HippodromeComponent', () => {
  let component: HippodromeComponent;
  let fixture: ComponentFixture<HippodromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HippodromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HippodromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
