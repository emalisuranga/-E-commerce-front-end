import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanakPageComponent } from './thanak-page.component';

describe('ThanakPageComponent', () => {
  let component: ThanakPageComponent;
  let fixture: ComponentFixture<ThanakPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanakPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
