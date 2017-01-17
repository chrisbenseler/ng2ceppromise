import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage'
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  addresses: Array<any> = []
  is_loading:boolean = false

  constructor(public localStorageService: LocalStorageService) { }

  ngOnInit() {
  	this.is_loading = true
  	let ceps = this.localStorageService.get('ceps')
  	if(ceps) {
  		this.addresses = ceps['keys']
  		.map( cep => this.localStorageService.get(cep) )
  		.map( address => JSON.parse(address))
  	}
  	this.is_loading = false
  }

}
