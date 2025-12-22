import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPartido } from './registrar-partido';

describe('RegistrarPartido', () => {
  let component: RegistrarPartido;
  let fixture: ComponentFixture<RegistrarPartido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPartido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPartido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
