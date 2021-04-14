import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousUploadsComponent } from './previous-uploads.component';

describe('PreviousUploadsComponent', () => {
  let component: PreviousUploadsComponent;
  let fixture: ComponentFixture<PreviousUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
