A very simple and lightweight Javascript Priority Queue, based on [this article](https://www.geeksforgeeks.org/implementation-priority-queue-javascript/).

Focused on functionality rather than performance.

Works with both ES Modules and CommonJS.

## Installation

```sh
npm i @nermin99/priorityqueue
```

## Import

```js
import { PriorityQueue } from '@nermin99/priorityqueue'
```

or

```js
const { PriorityQueue } = require('@nermin99/priorityqueue')
```

## Basic Usage

```js
const pq = new PriorityQueue()

pq.enqueue(1, 30)
pq.enqueue(2, 10)
pq.enqueue('x,y', 20)

pq.dequeue() // { key: 2, priority: 10 }
pq.front() // { key: 'x,y', priority: 20 }
pq.rear() // { key: 1, priority: 30 }
```

## API Reference

- [.**enqueue**(key, priority)](#enqueuekey-priority)
- [.**dequeue**()](#dequeue)
- [.**updatePriority**(key, newPriority)](#updateprioritykey-newpriority)
- [.**front**()](#front)
- [.**rear**()](#rear)
- [.**isEmpty**()](#isempty)
- [.**entries**()](#entries)
- [.**keys**()](#keys)
- [.**priorities**()](#priorities)

### .**enqueue**(key, priority)

Adds an element with a given key and priority to the queue.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq // [{key: 'x,y', priority: 10}, {key: 1, priority: 20}]
```

### .**dequeue**()

Removes the _highest_ priority element from the queue and returns it.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

const element = pq.dequeue()
element // {key: 'x,y', priority: 10}
```

### .**updatePriority**(key, newPriority)

Updates the priority of an existing element in the queue.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq.updatePriority(1, 5)
pq // [{key: 1, priority: 5}, {key: 'x,y', priority: 10}]
```

### .**front**()

Returns the _highest_ priority element in the queue without removing it.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq.front() // {key: 'x,y', priority: 10}
pq // [{key: 'x,y', priority: 10}, {key: 1, priority: 20}]
```

### .**rear**()

Returns the _lowest_ priority element in the queue without removing it.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq.rear() // {key: 1, priority: 20}
pq // [{key: 'x,y', priority: 10}, {key: 1, priority: 20}]
```

### .**isEmpty**()

Returns true if the queue is empty.

```js
pq.enqueue(1, 20)
pq.dequeue()

pq.isEmpty() // true
```

### .**entries**()

Returns an array of the queue key/priority-pairs ordered by priority.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq.entries() // [{key: 'x,y', priority: 10}, {key: 1, priority: 20}]
```

### .**keys**()

Returns an array of the queue keys ordered by priority.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq.keys() // ['x,y', 1]
```

### .**priorities**()

Returns an array of the queue priorities ordered by priority.

```js
pq.enqueue(1, 20)
pq.enqueue('x,y', 10)

pq.entries() // [10, 20]
```
