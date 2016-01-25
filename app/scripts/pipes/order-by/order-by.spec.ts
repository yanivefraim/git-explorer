import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {OrderBy} from './order-by';


describe('OrderBy Pipe', () => {

  beforeEachProviders(() => [OrderBy]);


  it('should transform the input', inject([OrderBy], (pipe:OrderBy) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
