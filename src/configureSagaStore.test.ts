/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { configureSagaStore } from './configureSagaStore';

describe('configureSagaStore', () => {
  function reducer(state: any) {
    return state;
  }

  it('returns a store', () => {
    expect(configureSagaStore({ reducer })).toBeDefined();
  });

  it('accepts middleware', () => {
    const middleware = (getDefaultMiddleware: () => any[]) =>
      getDefaultMiddleware();
    expect(configureSagaStore({ middleware, reducer })).toBeDefined();
  });
});
