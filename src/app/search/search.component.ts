import { Component, OnInit, Input } from '@angular/core'
import { LocalStorageService } from 'angular-2-local-storage'
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'
import { default as cep } from 'cep-promise'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  zipcode:string = ""
  address:any = null
  is_searching:boolean = false
  error:any = null
  cep:any = cep

  constructor(public localStorageService: LocalStorageService) {
  }

  ngOnInit() {

  }

  onSubmit() {
  	this.error = null
  	this.is_searching = true
  	this.address = null
  	this.cep(this.zipcode)
  	.then( data => {
  		this.address = data
  		this.is_searching = false
      return data
  	})
    .then( this.add_address_storage.bind(this) )
    .then( this.add_key_storage.bind(this) )
  	.catch( err => {
  		this.error = err
  		this.is_searching = false
  	})
  }

  add_address_storage(address) {
    this.localStorageService.set(address.cep, JSON.stringify(address))
    return address
  }

  add_key_storage(address) {
    let ceps = this.localStorageService.get('ceps')
    if(!ceps)
      ceps = {}
    ceps['keys'] = ceps['keys'] || []
    if(ceps['keys'].indexOf(address.cep) < 0) {
      ceps['keys'].push(address.cep)
      this.localStorageService.set('ceps', ceps)
    }
  }

}
