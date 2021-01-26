/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import {
  Action,
  AnyAction,
  configureStore,
  ConfigureStoreOptions,
  getDefaultMiddleware,
  EnhancedStore,
  Middleware,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { setSagaRunner } from './runSaga';

/**
 * Wraps configureStore from Redux ToolKit and returns a store with
 * Saga Middleware and by default no Thunk Middleware.
 *
 * @param options configuration object with same options as Redux ToolKit.
 * @returns A configured Redux store with Saga Middleware.
 */
export function configureSagaStore<S = any, A extends Action = AnyAction>(
  options: ConfigureStoreOptions
): EnhancedStore<S, A> {
  const { middleware: middlewareParam } = options;

  let baseMiddleware: MiddlewareArray<Middleware<{}, S>>;
  if (middlewareParam) {
    baseMiddleware = middlewareParam as MiddlewareArray<Middleware<{}, S>>;
  } else {
    baseMiddleware = getDefaultMiddleware({ thunk: false });
  }

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [...baseMiddleware, sagaMiddleware];

  const store = configureStore({
    ...options,
    middleware,
  });

  setSagaRunner(sagaMiddleware);

  // @ts-ignore
  return store;
}
