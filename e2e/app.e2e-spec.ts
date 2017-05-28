import { Johnnytung.Github.IoPage } from './app.po';

describe('johnnytung.github.io App', () => {
  let page: Johnnytung.Github.IoPage;

  beforeEach(() => {
    page = new Johnnytung.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
