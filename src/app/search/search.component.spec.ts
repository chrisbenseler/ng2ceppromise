/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { SearchComponent } from './search.component';
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'
import { LocalStorageModule } from 'angular-2-local-storage'

import { default as cep } from 'cep-promise'

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, FadingCircleComponent ],
      imports: [ 
        FormsModule,
        LocalStorageModule.withConfig({
          prefix: 'my-app',
          storageType: 'localStorage'
      })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should have form', () => {
    expect(fixture.debugElement.query(By.css('form'))).toBeTruthy()
  })

  it('should query data', fakeAsync(() => {
    fixture.componentInstance.cep = function() {
      return new Promise( (resolve, reject) => {
        resolve({
          street: 'Rua Padre Ramon Ortiz',
          city: 'São Paulo',
          state: 'SP',
          cep: '04477100'
        })
      })
    }
    fixture.componentInstance.zipcode = '04477100'
    fixture.detectChanges()
    let form = fixture.debugElement.query(By.css('form'))
    form.triggerEventHandler('submit', null)
    tick()
    expect(typeof fixture.componentInstance).toBe('object')
    expect(fixture.componentInstance.address.street).toBe('Rua Padre Ramon Ortiz')
  }))



});
