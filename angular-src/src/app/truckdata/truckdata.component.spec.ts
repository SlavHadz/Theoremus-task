import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckdataComponent } from './truckdata.component';

describe('TruckdataComponent', () => {
  let component: TruckdataComponent;
  let fixture: ComponentFixture<TruckdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
