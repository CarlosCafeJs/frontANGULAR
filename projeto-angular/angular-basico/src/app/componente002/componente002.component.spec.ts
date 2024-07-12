import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente002Component } from './componente002.component';

describe('Componente002Component', () => {
  let component: Componente002Component;
  let fixture: ComponentFixture<Componente002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente002Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
