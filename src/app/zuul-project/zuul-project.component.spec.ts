import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuulProjectComponent } from './zuul-project.component';

describe('ZuulProjectComponent', () => {
  let component: ZuulProjectComponent;
  let fixture: ComponentFixture<ZuulProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuulProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuulProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
