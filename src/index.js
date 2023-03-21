import './style.css';
import mainDOM from './mainDOM';

import generateUI from './uiDOM';
import getSelected from './mainLogic';

if (localStorage.getItem('selected') === null) {
  const selected = getSelected();
  localStorage.setItem('selected', JSON.stringify(selected.todoList));
}
generateUI();
mainDOM.clickCheckbox();
mainDOM.clickDetails();
// mainDOM.clickDelete();
mainDOM.clickEdit();
