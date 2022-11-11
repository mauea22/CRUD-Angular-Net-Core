import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarcomentarioComponent } from './agregareditarcomentario.component';

describe('AgregareditarcomentarioComponent', () => {
  let component: AgregareditarcomentarioComponent;
  let fixture: ComponentFixture<AgregareditarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregareditarcomentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareditarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
