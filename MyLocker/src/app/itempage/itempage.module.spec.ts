import { ItempageModule } from './itempage.module';

describe('ItempageModule', () => {
  let itempageModule: ItempageModule;

  beforeEach(() => {
    itempageModule = new ItempageModule();
  });

  it('should create an instance', () => {
    expect(itempageModule).toBeTruthy();
  });
});
