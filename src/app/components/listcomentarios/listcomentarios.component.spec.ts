import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomentariosComponent } from './listcomentarios.component';

describe('ListcomentariosComponent', () => {
  let component: ListcomentariosComponent;
  let fixture: ComponentFixture<ListcomentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomentariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcomentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
