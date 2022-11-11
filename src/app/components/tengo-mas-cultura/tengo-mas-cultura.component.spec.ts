import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TengoMasCulturaComponent } from './tengo-mas-cultura.component';

describe('TengoMasCulturaComponent', () => {
  let component: TengoMasCulturaComponent;
  let fixture: ComponentFixture<TengoMasCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TengoMasCulturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TengoMasCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
