import { ApiQueryBuilderModule } from './api-query-builder-module.module';

describe('ApiQueryBuilderModuleModule', () => {
  let apiQueryBuilderModuleModule: ApiQueryBuilderModule;

  beforeEach(() => {
    apiQueryBuilderModuleModule = new ApiQueryBuilderModule();
  });

  it('should create an instance', () => {
    expect(apiQueryBuilderModuleModule).toBeTruthy();
  });
});
