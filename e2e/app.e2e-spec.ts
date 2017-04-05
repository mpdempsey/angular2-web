import { SafetyNetWebPage } from './app.po';

describe('safety-net-web App', () => {
  let page: SafetyNetWebPage;

  beforeEach(() => {
    page = new SafetyNetWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
