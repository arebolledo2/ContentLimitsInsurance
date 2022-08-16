import { AppPage } from './app.po';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display content limits', () => {
        page.navigateTo();
        page.getMainHeading().then((heading: string) => expect(heading).toEqual('Content Limits'));
    });
});
