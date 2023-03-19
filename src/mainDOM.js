import { handleDone, handleDelete } from './mainLogic';

const mainDOM = (() => {
  let data;

  const selectPriorityStyling = (container, p) => {
    if (p === 'low') {
      container.classList.add('border-l-4', 'border-green-500');
    } else if (p === 'medium') {
      container.classList.add('border-l-4', 'border-yellow-500');
    } else if (p === 'high') {
      container.classList.add('border-l-4', 'border-red-500');
    }
  };

  const createItem = (e, id) => {
    const container = document.createElement('div');
    container.setAttribute('data-id', id);
    container.classList.add(
      'item',
      'flex',
      'items-center',
      'w-11/12',
      'text-base',
      'bg-gray-100',
      'rounded-md',
      'gap-2',
      'border-r-8',
      'border-r-transparent'
    );
    const checkbox = document.createElement('span');
    checkbox.classList.add(
      'check',
      'material-symbols-outlined',
      'pl-4',
      'cursor-pointer',
      'text-lg'
    );
    checkbox.textContent = !e.done ? 'check_box_outline_blank' : 'check_box';
    const task = document.createElement('div');
    const date = document.createElement('div');
    const details = document.createElement('button');
    task.classList.add('py-1', 'px-8', 'flex-1');
    date.classList.add('py-1', 'px-8');
    details.classList.add(
      'detail',
      'px-2',
      'text-rose-500',
      'text-sm',
      'border-2',
      'border-rose-500',
      'hover:bg-rose-500',
      'hover:text-white'
    );
    task.textContent = e.title;
    date.textContent = e.dueDate;
    details.textContent = 'Details';
    const edit = document.createElement('span');
    edit.classList.add(
      'edit',
      'material-symbols-outlined',
      'text-sm',
      'px-2',
      'text-rose-500',
      'border',
      'border-rose-500',
      'hover:bg-rose-500',
      'hover:text-white',
      'rounded'
    );
    edit.textContent = 'edit';
    const del = document.createElement('span');
    del.classList.add(
      'delete',
      'material-symbols-outlined',
      'text-sm',
      'px-2',
      'text-rose-500',
      'border',
      'border-rose-500',
      'hover:bg-rose-500',
      'hover:text-white',
      'rounded'
    );
    del.textContent = 'delete';
    container.append(checkbox, task, details, date, edit, del);
    selectPriorityStyling(container, e.priority);

    return container;
  };

  const generateMain = (selected) => {
    data = selected;
    const cardsBox = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('text-3xl', 'text-rose-500', 'py-2', 'px-4');
    title.textContent = data.name;
    cardsBox.appendChild(title);
    const items = document.createElement('div');
    items.setAttribute('id', 'items');
    items.classList.add('flex', 'flex-col', 'items-center', 'gap-2');
    for (let i = 0; i < data.todoList.length; i++) {
      items.append(createItem(data.todoList[i], i));
    }
    cardsBox.appendChild(items);

    return cardsBox;
  };

  const clickCheckbox = () => {
    const events = document.querySelectorAll('.check');
    events.forEach((ev) =>
      ev.addEventListener('click', () => {
        ev.textContent =
          ev.textContent === 'check_box'
            ? 'check_box_outline_blank'
            : 'check_box';
        handleDone(ev.parentNode.dataset.id);
      })
    );
  };

  const createDetailsModal = (ev) => {
    const outerDiv = document.createElement('div');
    outerDiv.setAttribute('id', 'modal');
    outerDiv.classList.add(
      'bg-black',
      'bg-opacity-50',
      'absolute',
      'inset-0',
      'flex',
      'justify-center',
      'items-center'
    );
    const innerDiv = document.createElement('div');
    outerDiv.appendChild(innerDiv);
    innerDiv.classList.add('bg-gray-200', 'p-2', 'rounded-lg');

    const topLine = document.createElement('div');
    topLine.classList.add('flex', 'justify-between', 'items-center');
    const title = document.createElement('div');
    title.classList.add('text-lg', 'font-bold', 'text-rose-500');
    title.textContent = data.todoList[ev.parentNode.dataset.id].getTitle();
    const exit = document.createElement('span');
    exit.setAttribute('id', 'close');
    exit.classList.add(
      'material-symbols-outlined',
      'pl-4',
      'cursor-pointer',
      'text-lg',
      'hover:text-red-500'
    );
    exit.textContent = 'close';
    topLine.append(title, exit);
    const des = document.createElement('div');
    des.textContent = data.todoList[ev.parentNode.dataset.id].getDescription();
    des.classList.add('mt-4', 'text-xl');
    innerDiv.append(topLine, des);

    return outerDiv;
  };

  const clickDetails = () => {
    const events = document.querySelectorAll('.detail');
    events.forEach((ev) =>
      ev.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.appendChild(createDetailsModal(ev));
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
          content.removeChild(document.getElementById('modal'));
        });
      })
    );
  };

  const clickDelete = () => {
    const events = document.querySelectorAll('.delete');
    events.forEach((ev) =>
      ev.addEventListener('click', () => {
        handleDelete(ev.parentNode.dataset.id);
        const items = document.getElementById('items');
        items.removeChild(ev.parentNode);
      })
    );
  };

  const clickEdit = () => {
    const events = document.querySelectorAll('.edit');
    events.forEach((ev) =>
      ev.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.appendChild(createDetailsModal(ev));
        const close = document.getElementById('close');
        close.addEventListener('click', () => {
          content.removeChild(document.getElementById('modal'));
        });
      })
    );
  };

  return { generateMain, clickCheckbox, clickDetails, clickDelete, clickEdit };
})();

export default mainDOM;
