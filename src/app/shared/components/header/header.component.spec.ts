import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';

import { ActivatedRoute } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const spy = jasmine.createSpyObj('LoginService', ['logout']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
         RouterTestingModule,
         NgReduxTestingModule],
      declarations: [HeaderComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    expect(component).toBeTruthy();
  });
 });
