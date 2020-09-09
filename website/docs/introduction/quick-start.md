---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
hide_title: true
---

# Quick Start

## Purpose

**Queue for Redux-Saga** eliminates "rootSaga" boilerplate code. Saga Watchers no longer need to be imported and run by a "rootSaga".

**Queue for Redux-Saga** promotes code splitting. Saga Watchers can now be loaded "as needed", rather than up front.

## What's Included

**Queue for Redux-Saga** includes:

- [`configureSagaStore()`](/queue-for-redux-saga/docs/api/configureSagaStore): Function that wraps <a href="https://redux-toolkit.js.org/api/configureStore" target="_blank">"Redux ToolKit: configureStore"</a>.
- [`runSaga()`](/queue-for-redux-saga/docs/api/runSaga): Function that runs a Saga as soon as the Redux Store is configured.
- [`setSagaRunner()`](/queue-for-redux-saga/docs/api/setSagaRunner): Function to be called after configuring the Redux Store.  
  Note: Not required if using [configureSagaStore](/queue-for-redux-saga/docs/api/configureSagaStore).
- [`getQueuedSagas()`](/queue-for-redux-saga/docs/api/getQueuedSagas): Utility for use in Unit Tests.
- [`clearQueuedSagas()`](/queue-for-redux-saga/docs/api/clearQueuedSagas): Utility for use in Unit Tests.

## Installation

**Queue for Redux-Saga** is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install --save @vmw/queue-for-redux-saga

# Yarn
yarn add @vmw/queue-for-redux-saga
```

**Queue for Redux-Saga** has two peer dependencies:

- **<a href="https://github.com/redux-saga/redux-saga/" target="_blank">redux-saga</a>** required - all versions are supported
- **<a href="https://github.com/reduxjs/redux-toolkit" target="_blank">@reduxjs/toolkit</a>** optional - used for [`configureSagaStore`](/queue-for-redux-saga/docs/api/configureSagaStore)
