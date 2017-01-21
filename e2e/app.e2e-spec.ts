import { LiveToLiveAppPage } from './app.po';

describe('live-to-live-app App', function() {
  let page: LiveToLiveAppPage;

  beforeEach(() => {
    page = new LiveToLiveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
