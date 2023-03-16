export default class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
}
