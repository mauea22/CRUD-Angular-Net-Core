import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercomentarioComponent } from './vercomentario.component';

describe('VercomentarioComponent', () => {
  let component: VercomentarioComponent;
  let fixture: ComponentFixture<VercomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercomentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
