import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConnectionsComponent } from './new-connections.component';

describe('NewConnectionsComponent', () => {
  let component: NewConnectionsComponent;
  let fixture: ComponentFixture<NewConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
