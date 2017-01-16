import { Ng2ceppromisePage } from './app.po'
import { browser, element, by } from 'protractor'

describe('ng2ceppromise App', function() {
  let page: Ng2ceppromisePage;

  beforeEach(() => {
    page = new Ng2ceppromisePage()
  });

  it('should display message with proper title', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Consulta CEP')
  })

  it('should have search form', () => {
    expect(page.getElementsBySelector('form').isPresent()).toBe(true)
  })

  it('should fill input with valid zip code', () => {
    page.getElementsBySelector('form input').sendKeys('04477100')
  })

  it('should submit form', () => {
    page.getElementsBySelector('form button').click()
  })

  it('should have result', () => {
  	page.waitForElementToBePresent(page.getElementsBySelector("section div ul"))
  	let address = page.getElementsBySelector("section div ul li:first-child").getText()
  	expect(address).toBe('Rua Padre Ramon Ortiz')
  })

  it('should fill input with invalid zip code', () => {
    let input = page.getElementsBySelector('form input')
    input.clear().then( () => {
    	input.sendKeys('11111111')
    })
  })

  it('should submit form again', () => {
    page.getElementsBySelector('form button').click()
  })

  it('should have error message', () => {
  	page.waitForElementToBePresent(page.getElementsBySelector("div.alert.alert-warning"))
  	expect(page.getElementsBySelector('div.alert.alert-warning').isPresent()).toBe(true)
  })

})

