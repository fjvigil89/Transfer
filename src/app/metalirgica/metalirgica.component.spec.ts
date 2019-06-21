import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalirgicaComponent } from './metalirgica.component';

describe('MetalirgicaComponent', () => {
  let component: MetalirgicaComponent;
  let fixture: ComponentFixture<MetalirgicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalirgicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalirgicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
