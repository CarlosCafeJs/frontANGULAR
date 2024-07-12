import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente001Component } from './componente001.component';

describe('Componente001Component', () => {
  let component: Componente001Component;
  let fixture: ComponentFixture<Componente001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
