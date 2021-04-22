---
id: setSagaRunner
title: setSagaRunner
sidebar_label: setSagaRunner
---

**`setSagaRunner` is only needed when not using [`configureSagaStore`](/queue-for-redux-saga/docs/api/configureSagaStore).**

**If not using [`configureSagaStore`](/queue-for-redux-saga/docs/api/configureSagaStore)**, `setSagaRunner` must be called after configuring the Redux Store, in order to pass the sagaMiddleware instance to **Queue for Redux-Saga**.
This will run any queued Sagas, and clears the queue.

## Parameters

`sagaRunner` - The sagaMiddleware instance used to configure the Redux Store.

## Usage

### Example without Redux Toolkit

```js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { setSagaRunner } from '@vmw/queue-for-redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

setSagaRunner(sagaMiddleware);
```

### Example with Redux Toolkit

Use [`configureSagaStore`](/queue-for-redux-saga/docs/api/configureSagaStore)
