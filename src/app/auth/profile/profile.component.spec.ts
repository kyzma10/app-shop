import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HeaderComponent} from '../../shared/header/header.component';
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '../../core/auth.service';

xdescribe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule, AppRoutingModule],
      providers: [AuthService],
      declarations: [ ProfileComponent, HeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
