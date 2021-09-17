/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import {
  Action,
  AnyAction,
  configureStore,
  ConfigureStoreOptions,
  EnhancedStore,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { setSagaRunner } from './runSaga';

// type not exported by rtk
type CurriedGetDefaultMiddleware = (options?: any) => MiddlewareArray<any>;

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
  let middleware;

  const sagaMiddleware = createSagaMiddleware();

  if (middlewareParam) {
    if (typeof middlewareParam === 'function') {
      middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        middlewareParam(getDefaultMiddleware).concat(sagaMiddleware);
    } else {
      middleware = [...middlewareParam, sagaMiddleware];
    }
  } else {
    middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  }

  const store = configureStore({
    ...options,
    middleware,
  });

  setSagaRunner(sagaMiddleware);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore todo
  return store;
}
