import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegprodOwlComponent } from './regprod-owl.component';

describe('RegprodOwlComponent', () => {
  let component: RegprodOwlComponent;
  let fixture: ComponentFixture<RegprodOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegprodOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegprodOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
