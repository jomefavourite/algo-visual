export default class Algorithm {
  async executeAndCount(array) {
    this.operations = 0;
    try {
      this.execute(array);
    } catch {
      // continue regardless of error
    }
    return this.operations;
  }

  incrementOpCounter() {
    this.operations++;
  }
}
