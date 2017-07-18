import { Angular4trainingPage } from './app.po';

describe('angular4training App', () => {
  let page: Angular4trainingPage;

  beforeEach(() => {
    page = new Angular4trainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
