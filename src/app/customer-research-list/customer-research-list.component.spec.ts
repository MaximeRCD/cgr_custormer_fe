import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResearchListComponent } from './customer-research-list.component';

describe('CustomerResearchListComponent', () => {
  let component: CustomerResearchListComponent;
  let fixture: ComponentFixture<CustomerResearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerResearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerResearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
