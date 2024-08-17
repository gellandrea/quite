class MyClass {
  constructor() {
    this._running = false;
  }

  start() {
    this._running = true;
    console.log("Started running");
  }

  stop() {
    this._running = false;
    console.log("Stopped running");
  }

  clear() {
    this._running = null; // Clear the running state
    console.log("Cleared state");
  }

  getStatus() {
    return this._running;
  }
}

const instance = new MyClass();
instance.start();   // Output: Started running
console.log(instance.getStatus()); // Output: true

instance.stop();    // Output: Stopped running
console.log(instance.getStatus()); // Output: false

instance.clear();   // Output: Cleared state
console.log(instance.getStatus()); // Output: null
