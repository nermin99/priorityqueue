// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/

interface qElementType {
  key: number | string
  priority: number
}

export class PriorityQueue {
  items: qElementType[]
  #keySet: Set<Object>

  constructor() {
    this.items = [] // An array is used to implement priority
    this.#keySet = new Set()
  }

  /**
   * Adds an element with a given key and priority to the queue.
   * @param {number | string} key
   * @param {number} priority The lower the value, the higher the priority.
   */
  enqueue(key: number | string, priority: number) {
    const qElement: qElementType = { key, priority }

    if (this.#keySet.has(key))
      throw Error('An element with this key already exists in the queue.')
    this.#keySet.add(key)

    // iterate through the items array and insert the element at the
    // correct position of the queue
    let inserted = false
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
    if (this.isEmpty()) throw Error('Underflow, no elements in the queue.')
    const element = this.items.shift()!
    this.#keySet.delete(element.key)
    return element
  }

  /**
   * Updates the priority of an existing element in the queue.
   * @param {number | string} key The key of an existing element.
   * @param {number} newPriority The lower the value, the higher the priority.
   * @returns `true`, if succesfull.
   */
  updatePriority(key: number | string, newPriority: number) {
    const idx = this.items.findIndex((element) => element.key === key)
    if (idx === -1) throw Error('There is no element with this key in the queue.')

    this.items[idx] = { key, priority: newPriority }
    this.items = this.items.sort((a, b) => a.priority - b.priority)
    return true
  }

  /**
   * Returns the *highest* priority element in the queue without removing it.
   * @returns \{key, priority}
   */
  front() {
    if (this.isEmpty()) throw Error('No elements in the queue.')
    return this.items[0]
  }

  /**
   * Returns the *lowest* priority element in the queue without removing it.
   * @returns \{key, priority}
   */
  rear() {
    if (this.isEmpty()) throw Error('No elements in the queue.')
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
