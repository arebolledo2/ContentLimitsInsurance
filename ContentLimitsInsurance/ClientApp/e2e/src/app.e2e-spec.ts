import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display content limits', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('Content Limits');
  });
});
