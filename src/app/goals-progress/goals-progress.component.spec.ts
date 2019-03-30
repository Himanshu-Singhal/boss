import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsProgressComponent } from './goals-progress.component';

describe('GoalsProgressComponent', () => {
  let component: GoalsProgressComponent;
  let fixture: ComponentFixture<GoalsProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
