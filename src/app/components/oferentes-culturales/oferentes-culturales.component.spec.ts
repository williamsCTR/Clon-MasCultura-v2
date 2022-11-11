import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferentesCulturalesComponent } from './oferentes-culturales.component';

describe('OferentesCulturalesComponent', () => {
  let component: OferentesCulturalesComponent;
  let fixture: ComponentFixture<OferentesCulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferentesCulturalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OferentesCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
