import Folder from './Folder';
import TodoItem from './TodoItem';

const homeItems = [
  new TodoItem(
    'Gym',
    'Got to go to the gym and work out for 2 hours',
    new Date(),
    'medium'
  ),
  new TodoItem(
    'Cooking',
    'Make curry and rice for lunch',
    new Date(),
    'medium'
  ),
  new TodoItem(
    'Assignment',
    'Finish math assignment before 8PM',
    new Date(),
    'high'
  ),
  new TodoItem(
    'Clean Book Shelves',
    'Book Shelves have dust. Need to clean today',
    new Date(),
    'low'
  ),
];
// console.log(homeItems);
homeItems[1].changeDone();
homeItems[2].setDone(true);
// console.log(homeItems);

const todayItems = [
  new TodoItem('Homework', 'Finish philosophy homework', new Date(), 'medium'),
  new TodoItem('Woodwork', 'Work on the wooden spoon', new Date(), 'low'),
  new TodoItem('Group work', 'Meeting with group', new Date(), 'high'),
  new TodoItem(
    'Laundry',
    'Clothes are dirty. Need to do laundry today',
    new Date(),
    'medium'
  ),
];

const thisWeekItems = [].concat(homeItems, todayItems);

const home = new Folder('Home', homeItems);
const today = new Folder('Today', todayItems);
const thisWeek = new Folder('This Week', thisWeekItems);

let selected = home;

export const changeSelected = (selection) => {
  selected = selection;
};

export const handleDone = (id) => {
  selected.todoList[id].changeDone();
};

export const handleDelete = (id) => {
  selected.todoList.splice(id, 1);
  console.log(selected.todoList);
};

export default function getSelected() {
  return selected;
}

changeSelected(today);
changeSelected(thisWeek);
changeSelected(home);
console.log(selected.todoList);
