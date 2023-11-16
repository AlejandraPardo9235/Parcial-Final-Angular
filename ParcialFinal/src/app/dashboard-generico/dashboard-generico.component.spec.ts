import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGenericoComponent } from './dashboard-generico.component';

describe('DashboardGenericoComponent', () => {
  let component: DashboardGenericoComponent;
  let fixture: ComponentFixture<DashboardGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGenericoComponent]
    });
    fixture = TestBed.createComponent(DashboardGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
