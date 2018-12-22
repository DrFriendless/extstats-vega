import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtstatsVegaComponent } from './extstats-vega.component';

describe('ExtstatsVegaComponent', () => {
  let component: ExtstatsVegaComponent;
  let fixture: ComponentFixture<ExtstatsVegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtstatsVegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtstatsVegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
