import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUploadsComponent } from './new-uploads.component';

describe('NewUploadsComponent', () => {
  let component: NewUploadsComponent;
  let fixture: ComponentFixture<NewUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
