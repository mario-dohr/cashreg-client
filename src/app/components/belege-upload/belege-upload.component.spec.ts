import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelegeUploadComponent } from './belege-upload.component';

describe('BelegeUploadComponent', () => {
  let component: BelegeUploadComponent;
  let fixture: ComponentFixture<BelegeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelegeUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelegeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
