import { BritannicaPage } from './app.po';

describe('britannica App', () => {
  let page: BritannicaPage;

  beforeEach(() => {
    page = new BritannicaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
