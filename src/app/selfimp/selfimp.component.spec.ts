import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfimpComponent } from './selfimp.component';

describe('SelfimpComponent', () => {
  let component: SelfimpComponent;
  let fixture: ComponentFixture<SelfimpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfimpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
