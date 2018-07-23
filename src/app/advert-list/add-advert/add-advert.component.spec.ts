import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertComponent } from './add-advert.component';
import {HeaderComponent} from '../../shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {AppModule} from '../../app.module';
import {NgModule} from '@angular/core';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {RouterTestingModule} from '@angular/router/testing';

xdescribe('AddAdvertComponent', () => {
  let component: AddAdvertComponent;
  let fixture: ComponentFixture<AddAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdvertComponent, HeaderComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
