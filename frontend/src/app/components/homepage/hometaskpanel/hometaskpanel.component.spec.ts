import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometaskpanelComponent } from './hometaskpanel.component';

describe('HometaskpanelComponent', () => {
  let component: HometaskpanelComponent;
  let fixture: ComponentFixture<HometaskpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometaskpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometaskpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
