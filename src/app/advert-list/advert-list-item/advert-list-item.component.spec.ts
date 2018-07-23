import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertListItemComponent } from './advert-list-item.component';
import {HeaderComponent} from '../../shared/header/header.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {NgModule} from '@angular/core';
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';

xdescribe('AdvertListItemComponent', () => {
  let component: AdvertListItemComponent;
  let fixture: ComponentFixture<AdvertListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertListItemComponent, HeaderComponent, FooterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
