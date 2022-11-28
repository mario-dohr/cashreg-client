import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelegDetailComponent } from './beleg-detail.component';

describe('BelegDetailComponent', () => {
  let component: BelegDetailComponent;
  let fixture: ComponentFixture<BelegDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelegDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
