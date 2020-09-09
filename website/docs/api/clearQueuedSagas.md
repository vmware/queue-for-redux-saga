---
id: clearQueuedSagas
title: clearQueuedSagas
sidebar_label: clearQueuedSagas
hide_title: true
---

# `clearQueuedSagas`

Clears the queued Sagas.  
Useful for writing Unit Tests.

## Usage

### Basic Example

```js
import { clearQueuedSagas } from '@vmw/queue-for-redux-saga';

clearQueuedSagas();
```
