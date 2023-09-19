import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustormerListComponent } from './custormer-list.component';

describe('CustormerListComponent', () => {
  let component: CustormerListComponent;
  let fixture: ComponentFixture<CustormerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustormerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustormerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
