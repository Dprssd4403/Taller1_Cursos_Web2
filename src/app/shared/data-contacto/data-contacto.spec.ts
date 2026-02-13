import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataContacto } from './data-contacto';

describe('DataContacto', () => {
  let component: DataContacto;
  let fixture: ComponentFixture<DataContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
