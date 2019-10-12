export default class Queue<T> {
  elements: T[];

  constructor() {
    this.elements = [];
  }

  public get length(): number {
    return this.elements.length;
  }

  public enqueue(e: any): void {
    this.elements.push(e);
  }

  public dequeue(): any {
    return this.elements.shift();
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  public peek(): any {
    return this.isNotEmpty() ? this.elements[0] : undefined;
  }
}
