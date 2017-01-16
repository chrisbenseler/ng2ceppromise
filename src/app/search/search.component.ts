import { Component, OnInit } from '@angular/core';

import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'

//import { default as cep } from 'cep-promise';
let cep = require('cep-promise/dist/cep-promise');

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  zipcode:string = ""
  address:any = null
  is_searching:boolean = false

  constructor() { }

  ngOnInit() {
 
  }

  onSubmit() {
  	this.is_searching = true
  	this.address = null
  	cep(this.zipcode)
  	.then( data => {
  		this.address = data
  		this.is_searching = false
  	})
  	.catch( err => {
  		console.log(err)
  		this.is_searching = false
  	})
  }

}