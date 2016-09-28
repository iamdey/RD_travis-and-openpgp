describe('Home', () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true;
  });
  it('render fingerprint', () => {
    browser.get('/');
    expect(element(by.css('.code')).getText()).toContain('0e07fa9d3a38064e49de5b143c2b0c1e88d62143');
  });
})
