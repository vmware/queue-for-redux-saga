/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import {
  clearQueuedSagas,
  getQueuedSagas,
  runSaga,
  setSagaRunner,
} from './runSaga';

describe('runSaga', () => {
  it('initially there are no queued Sagas', () => {
    expect(getQueuedSagas()).toHaveLength(0);
  });

  it('runSaga requires argument', () => {
    let error;
    try {
      // @ts-ignore
      runSaga();
    } catch (e) {
      error = e;
    } finally {
      expect(error).toBeDefined();
    }
  });

  it('runSaga before setSagaRunner puts them into the queuedSagas', () => {
    runSaga(function* testSaga() {
      yield 'test1';
    });
    runSaga(function* testSaga() {
      yield 'test2';
    });
    expect(getQueuedSagas()).toHaveLength(2);
    clearQueuedSagas();
    expect(getQueuedSagas()).toHaveLength(0);
  });

  it('Sagas are run only after the setSagaRunner is called', () => {
    const mockCallRun = jest.fn();
    const mockSagaMiddleware = {
      run: mockCallRun,
    };

    runSaga(function* testSaga() {
      yield 'test1';
    });
    expect(mockCallRun.mock.calls).toHaveLength(0);

    setSagaRunner(mockSagaMiddleware);
    expect(mockCallRun.mock.calls).toHaveLength(1);

    runSaga(function* testSaga() {
      yield 'test2';
    });
    expect(mockCallRun.mock.calls).toHaveLength(2);

    setSagaRunner(null);
    runSaga(function* testSaga() {
      yield 'test3';
    });
    expect(mockCallRun.mock.calls).toHaveLength(2);

    setSagaRunner(mockSagaMiddleware);
    expect(mockCallRun.mock.calls).toHaveLength(3);
  });
});
