export default class Folder {
  constructor(name, todo) {
    this.name = name;
    this.todoList = todo;
  }

  getFolderName() {
    return this.name;
  }

  getTodoList() {
    return this.todoList;
  }

  addTodoItemToFolder(item) {
    this.todoList.push(item);
  }
}
