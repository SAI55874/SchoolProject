import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelpageComponent } from './welpage.component';

describe('WelpageComponent', () => {
  let component: WelpageComponent;
  let fixture: ComponentFixture<WelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
