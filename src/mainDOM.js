const createItem = (e) => {
  const container = document.createElement('div');
  container.classList.add('flex', 'justify-between', 'flex-1');
  const task = document.createElement('div');
  const priority = document.createElement('div');
  task.classList.add('py-2', 'px-8', 'text-xl');
  priority.classList.add('py-2', 'px-8', 'text-xl');
  task.textContent = e.title;
  priority.textContent = e.priority;
  container.append(task, priority);

  return container;
};

const generateMain = (selected) => {
  const data = selected;
  const cardsBox = document.createElement('div');

  const title = document.createElement('div');
  title.classList.add('text-3xl', 'text-rose-500', 'py-2', 'px-4');
  title.textContent = data.name;
  cardsBox.append(title);
  data.todoList.forEach((e) => {
    cardsBox.append(createItem(e));
  });

  return cardsBox;
};

export default generateMain;
