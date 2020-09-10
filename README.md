# Queue for Redux-Saga

[![build status](https://img.shields.io/travis/vmware/queue-for-redux-saga/beta.svg?style=flat-square)](https://travis-ci.com/vmware/queue-for-redux-saga)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

**Run Redux-Sagas without a "rootSaga". Kill boilerplate. Split code.**

## Install

`npm install --save @vmw/queue-for-redux-saga`

### Purpose

**Queue for Redux-Saga** eliminates "rootSaga" boilerplate code. Saga Watchers no longer need to be imported and run by a "rootSaga".

**Queue for Redux-Saga** promotes code splitting. Saga Watchers can now be loaded "as needed", rather than up front.

## What's Included

**Queue for Redux-Saga** includes:

- `configureSagaStore()`: Function that wraps <a href="https://redux-toolkit.js.org/api/configureStore" target="_blank">"Redux ToolKit: configureStore"</a>.
- `runSaga()`: Function that runs a Saga as soon as the Redux Store is configured.
- `setSagaRunner()`: Function to be called after configuring the Redux Store.  
  Note: Not required if using `configureSagaStore`.
- `getQueuedSagas()`: Utility for use in Unit Tests.
- `clearQueuedSagas()`: Utility for use in Unit Tests.

## Documentation

The **Queue for Redux-Saga** docs are available at **https://vmware.github.io/queue-for-redux-saga**.

## Contributing

The queue-for-redux-saga project team welcomes contributions from the community. Before you start working with queue-for-redux-saga, please
read our [Developer Certificate of Origin](https://cla.vmware.com/dco). All contributions to this repository must be
signed as described on that page. Your signature certifies that you wrote the patch or have the right to pass it on
as an open-source patch. For more detailed information, refer to [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Open source [licensed as MIT](https://github.com/vmware/queue-for-redux-saga/blob/master/LICENSE).
