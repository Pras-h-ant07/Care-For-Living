import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfocusComponent } from './impfocus.component';

describe('ImpfocusComponent', () => {
  let component: ImpfocusComponent;
  let fixture: ComponentFixture<ImpfocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
