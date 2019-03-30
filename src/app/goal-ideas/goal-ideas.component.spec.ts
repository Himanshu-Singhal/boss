import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalIdeasComponent } from './goal-ideas.component';

describe('GoalIdeasComponent', () => {
  let component: GoalIdeasComponent;
  let fixture: ComponentFixture<GoalIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
