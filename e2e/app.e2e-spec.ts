import { AtfWebsitePage } from './app.po';

describe('atf-website App', () => {
  let page: AtfWebsitePage;

  beforeEach(() => {
    page = new AtfWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
