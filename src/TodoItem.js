import format from 'date-fns/format';

export default class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = format(dueDate, 'do MMMM');
    this.priority = priority;
    this.done = false;
  }

  getTitle() {
    return this.title;
  }

  setTitle(t) {
    this.title = t;
  }

  getDescription() {
    return this.description;
  }

  setDescription(d) {
    this.description = d;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(p) {
    this.priority = p;
  }

  getDone() {
    return this.done;
  }

  setDone(d) {
    this.done = Boolean(d);
  }

  changeDone() {
    this.done = !this.done;
  }
}
