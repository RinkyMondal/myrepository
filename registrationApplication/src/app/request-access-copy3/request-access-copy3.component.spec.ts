import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccessCopy3Component } from './request-access-copy3.component';

describe('RequestAccessCopy3Component', () => {
  let component: RequestAccessCopy3Component;
  let fixture: ComponentFixture<RequestAccessCopy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAccessCopy3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAccessCopy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
