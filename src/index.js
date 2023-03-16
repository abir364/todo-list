import './style.css';

import format from 'date-fns/format';

import generateUI from './uiDOM';

import Folder from './Folder';
import TodoItem from './TodoItem';

generateUI();

const homeItems = [
  new TodoItem(
    'Gym',
    'Got to go to the gym and work out for 2 hours',
    format(new Date(), 'dd/MM/yyyy'),
    'high'
  ),
  new TodoItem(
    'Cook Lunch',
    'Make curry and rice',
    format(new Date(), 'dd/MM/yyyy'),
    'medium'
  ),
  new TodoItem(
    'Assignment',
    'Finish math assignment before 8PM',
    format(new Date(), 'dd/MM/yyyy'),
    'high'
  ),
  new TodoItem(
    'Clean Book Shelves',
    'Book Shelves have dust. Need to clean today',
    format(new Date(), 'dd/MM/yyyy'),
    'low'
  ),
];

const todayItems = [
  new TodoItem(
    'Homework',
    'Finish philosophy homework',
    format(new Date(), 'dd/MM/yyyy'),
    'medium'
  ),
  new TodoItem(
    'Woodwork',
    'Work on the wooden spoon',
    format(new Date(), 'dd/MM/yyyy'),
    'low'
  ),
  new TodoItem(
    'Group work',
    'Meeting with group',
    format(new Date(), 'dd/MM/yyyy'),
    'high'
  ),
  new TodoItem(
    'Laundry',
    'Clothes are dirty. Need to do laundry today',
    format(new Date(), 'dd/MM/yyyy'),
    'medium'
  ),
];

const thisWeekItems = [].concat(homeItems, todayItems);

const home = new Folder('Home', homeItems);
const today = new Folder('Today', todayItems);
const thisWeek = new Folder('This Week', thisWeekItems);

console.log(home);
console.log(today);
console.log(thisWeek);
