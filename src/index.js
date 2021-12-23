// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/

export class PriorityQueue {
  // An array is used to implement priority
  constructor() {
    this.items = []
  }

  /**
   * Adds an element with a given key and priority to the queue.
   * @param {number | string} key
   * @param {number} priority The lower the value, the higher the priority.
   */
  enqueue(key, priority) {
    const qElement = { key, priority }
    let inserted = false

    // iterate through the items array and insert the element at the
    // correct position of the queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement)
        inserted = true
        break
      }
    }

    // if the element has the highest priority it is added to the end of the queue
    if (!inserted) {
      this.items.push(qElement)
    }
  }

  /**
   * Removes the *highest* priority element from the queue and returns it.
   * @returns \{key, priority}
   */
  dequeue() {
    if (this.isEmpty()) return 'Underflow, no elements in Queue.'
    return this.items.shift()
  }

  /**
   * Returns the *highest* priority element in the queue without removing it.
   * @returns \{key, priority}
   */
  front() {
    if (this.isEmpty()) return 'No elements in Queue.'
    return this.items[0]
  }

  /**
   * Returns the *lowest* priority element in the queue without removing it.
   * @returns \{key, priority}
   */
  rear() {
    if (this.isEmpty()) return 'No elements in Queue.'
    return this.items[this.items.length - 1]
  }

  /**
   * Returns true if the queue is empty.
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * Returns an array of the queue key/priority-pairs ordered by priority.
   */
  entries() {
    return this.items
  }

  /**
   * Returns an array of the queue keys ordered by priority.
   */
  keys() {
    return this.items.map(({ key }) => key)
  }

  /**
   * Returns an array of the queue priorities ordered by priority.
   */
  priorities() {
    return this.items.map(({ priority }) => priority)
  }
}
