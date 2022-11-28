import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BelegListComponent } from './beleg-list.component';

describe('BelegListComponent', () => {
  let component: BelegListComponent;
  let fixture: ComponentFixture<BelegListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelegListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
