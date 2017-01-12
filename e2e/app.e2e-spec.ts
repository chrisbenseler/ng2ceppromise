import { Ng2ceppromisePage } from './app.po';

describe('ng2ceppromise App', function() {
  let page: Ng2ceppromisePage;

  beforeEach(() => {
    page = new Ng2ceppromisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
