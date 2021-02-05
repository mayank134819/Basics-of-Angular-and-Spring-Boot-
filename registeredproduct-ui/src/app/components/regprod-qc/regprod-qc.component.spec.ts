import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegprodQcComponent } from './regprod-qc.component';

describe('RegprodQcComponent', () => {
  let component: RegprodQcComponent;
  let fixture: ComponentFixture<RegprodQcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegprodQcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegprodQcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
