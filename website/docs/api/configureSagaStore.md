---
id: configureSagaStore
title: configureSagaStore
sidebar_label: configureSagaStore
hide_title: true
---

# `configureSagaStore`

`configureSagaStore` wraps the <a href="https://redux-toolkit.js.org/api/configureStore" target="_blank">"Redux ToolKit: configureStore"</a>.  
The returned store will always have the Saga Middleware and by default will not have the Thunk Middleware.

## Parameters

`configureSagaStore` accepts a single configuration object parameter, with the same options as <a href="https://redux-toolkit.js.org/api/configureStore" target="_blank">configureStore</a> from <a href="https://redux-toolkit.js.org" target="_blank">Redux ToolKit</a>.

## Usage

### Example

```js
import { configureSagaStore } from '@vmw/queue-for-redux-saga';

const store = configureSagaStore({
  reducer: rootReducer,
});
```

## Note

`configureSagaStore` requires the <a href="https://redux-toolkit.js.org" target="_blank"> Redux Toolkit '@reduxjs/toolkit'</a> peer dependency.  
To use [`runSaga`](/queue-for-redux-saga/docs/api/runSaga) without <a href="https://redux-toolkit.js.org" target="_blank"> Redux Toolkit</a>, see [`setSagaRunner`](/queue-for-redux-saga/docs/api/setSagaRunner).

## Implementation Details

The approximate internal implementation of `configureSagaStore` is:

```js
export function configureSagaStore(options) {
  const { middleware: middlewareParam } = options;

  let middleware = middlewareParam
    ? middlewareParam
    : getDefaultMiddleware({ thunk: false });

  const sagaMiddleware = createSagaMiddleware();

  middleware = [...middleware, sagaMiddleware];

  const store = configureStore({
    ...options,
    middleware,
  });

  setSagaRunner(sagaMiddleware);
  return store;
}
```
