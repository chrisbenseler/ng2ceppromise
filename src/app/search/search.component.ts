import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
 
  }

  onSubmit() {
  	this.address = null
  	cep(this.zipcode)
  	.then( data => {
  		console.log(data)
  		this.address = data
  	})
  	.catch( err => {
  		console.log(err)
  	})
  }

}
