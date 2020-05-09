import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesterndWeddingsComponent } from './westernd-weddings.component';

describe('WesterndWeddingsComponent', () => {
  let component: WesterndWeddingsComponent;
  let fixture: ComponentFixture<WesterndWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesterndWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesterndWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
