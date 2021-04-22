---
id: getQueuedSagas
title: getQueuedSagas
sidebar_label: getQueuedSagas
---

Returns an array of queued Sagas.  
Useful for writing Unit Tests.

## Usage

### Example with 'redux-saga-tester'

```ts
import SagaTester from 'redux-saga-tester';
import { getQueuedSagas, QueuedSaga } from '@vmw/queue-for-redux-saga';

const sagaTester = new SagaTester({
  initialState,
  reducers: rootReducer,
});

const queuedSagas: QueuedSaga[] = getQueuedSagas();
if (queuedSagas.length) {
  sagaTester.start(runQueuedSagas, queuedSagas);
}

function* runQueuedSagas(queuedSagas: QueuedSaga[]) {
  yield all(
    queuedSagas.map((qSaga: QueuedSaga) => call(qSaga.saga, ...qSaga.args))
  );
}
```
