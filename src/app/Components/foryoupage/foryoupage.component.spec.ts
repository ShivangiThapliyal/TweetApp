import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForyoupageComponent } from './foryoupage.component';

describe('ForyoupageComponent', () => {
  let component: ForyoupageComponent;
  let fixture: ComponentFixture<ForyoupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForyoupageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForyoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
