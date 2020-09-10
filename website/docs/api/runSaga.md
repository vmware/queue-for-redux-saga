---
id: runSaga
title: runSaga
sidebar_label: runSaga
hide_title: true
---

# `runSaga`

Runs a saga, or adds it to the queued sagas to be run, once the Redux Store
has been configured with a sagaMiddleware instance.

- Before [`setSagaRunner`](/queue-for-redux-saga/docs/api/setSagaRunner) is called, `runSaga` will queue the Saga.
- When [`setSagaRunner`](/queue-for-redux-saga/docs/api/setSagaRunner) is called all queued Sagas will be run.
- After [`setSagaRunner`](/queue-for-redux-saga/docs/api/setSagaRunner) is called, `runSaga` delegates to the runner.
  The runner is an object with a run function, which is usually the <a href="https://redux-saga.js.org/docs/api/" target="_blank">run</a> function of the sagaMiddleware instance used to configure the Redux Store.

## Parameters

### `saga`

The Saga generator function to be run.

### `...args`

Optional - Arguments to be passed to the Saga.

## Usage

### Basic Example

```js
import { runSaga } from '@vmw/queue-for-redux-saga';

runSaga(function* loadSomethingWatch() {
  yield takeEvery(LOAD_SOMETHING, loadSomethingWorker);
});

...
```
