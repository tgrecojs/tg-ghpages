import { TgGhpagesPage } from './app.po';

describe('tg-ghpages App', function() {
  let page: TgGhpagesPage;

  beforeEach(() => {
    page = new TgGhpagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
