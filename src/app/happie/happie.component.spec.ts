import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappieComponent } from './happie.component';

describe('HappieComponent', () => {
  let component: HappieComponent;
  let fixture: ComponentFixture<HappieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
