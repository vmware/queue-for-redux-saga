/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

/**
 * Runner interface
 */
interface SagaRunner {
  run: (saga: any, ...args: any[]) => void;
}

/**
 * A queued Saga and its arguments
 */
export type QueuedSaga = { args: any[]; saga: any };

const queuedSagas: QueuedSaga[] = [];

let sagaRunner: null | SagaRunner = null;

/**
 * Clears the queued Sagas.
 * Useful for writing Unit Tests.
 */
export function clearQueuedSagas(): void {
  queuedSagas.length = 0;
}

/**
 * Returns an array of QueuedSaga.
 * Useful for writing Unit Tests.
 */
export function getQueuedSagas(): QueuedSaga[] {
  // return a copy to prevent changes
  return [...queuedSagas];
}

/**
 * `setSagaRunner` must be called after configuring the Redux Store.
 * It will run any queued Sagas, and clears the queue.
 * @param sagaMiddleware The Saga Middleware instance used to
 * configure the Redux Store.
 */
export function setSagaRunner(sagaMiddleware: null | SagaRunner) {
  sagaRunner = sagaMiddleware;

  if (sagaRunner) {
    queuedSagas.forEach((qSaga: QueuedSaga) => {
      // @ts-ignore
      sagaRunner.run(qSaga.saga, ...qSaga.args);
    });
    queuedSagas.length = 0;
  }
}

/**
 * Runs a saga, or adds it to the queued sagas to be run, once the Redux Store
 * has been configured with a sagaMiddleware instance.
 * - Before `setSagaRunner` is called, `runSaga` will queue the Saga.
 * - After `setSagaRunner` is called, `runSaga` delegates to the runner.
 * @param saga Saga generator function to be run.
 * @param ...args (Optional) - Arguments to be passed to the Saga.
 */
export function runSaga(saga: any, ...args: any[]) {
  if (!saga) {
    throw new Error('runSaga called with no argument');
  }
  if (sagaRunner) {
    sagaRunner.run(saga, ...args);
  } else {
    queuedSagas.push({ args, saga });
  }
}
