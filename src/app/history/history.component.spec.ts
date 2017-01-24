/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryComponent } from './history.component';
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage'

let address_1 = {
  street: 'Rua Padre Ramon Ortiz',
  city: 'São Paulo',
  state: 'SP',
  cep: '04477100'
}

let address_2 = {
  street: 'Rua Padre Ramon Ortiz',
  city: 'São Paulo',
  state: 'SP',
  cep: '04477101'
}

let address_3 = {
  street: 'Rua Padre Ramon Ortiz',
  city: 'São Paulo',
  state: 'SP',
  cep: '04477102'
}

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent, FadingCircleComponent ],
      imports: [LocalStorageModule.withConfig({
          prefix: 'historycomponent-prefix',
          storageType: 'localStorage'
      })
      ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list items from storage', () => {
    component.localStorageService.set('ceps', { keys: ['04477100', '04477101', '04477102'] })
    component.localStorageService.set(address_1.cep, JSON.stringify(address_1))
    component.localStorageService.set(address_2.cep, JSON.stringify(address_2))
    component.localStorageService.set(address_3.cep, JSON.stringify(address_3))
    fixture.detectChanges()
    component.ngOnInit()
    fixture.detectChanges()
    expect(component.addresses.length).toBe(3)
    expect(fixture.debugElement.query(By.css('div.card'))).toBeTruthy()
  })

  it('should clear storage', fakeAsync(() => {
    component.remove_history()
    fixture.detectChanges()
    component.ngOnInit()
    fixture.detectChanges()
    expect(component.addresses.length).toBe(0)
    component.remove_history()
    fixture.detectChanges()
  }))
  
});
