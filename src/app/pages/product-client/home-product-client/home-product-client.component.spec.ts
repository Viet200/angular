import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductClientComponent } from './home-product-client.component';

describe('HomeProductClientComponent', () => {
  let component: HomeProductClientComponent;
  let fixture: ComponentFixture<HomeProductClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
