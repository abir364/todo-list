import createHeader from './headerDOM';
import createSideBar from './sidebarDOM';
import mainDOM from './mainDOM';
import createFooter from './footerDOM';

const generateUI = () => {
  const content = document.getElementById('content');
  content.classList.add('h-screen', 'grid', 'grid-cols-col', 'grid-rows-row');
  content.append(
    createHeader(),
    createSideBar(),
    mainDOM.generateMain(localStorage.getItem('selected')),
    createFooter()
  );
};

export default generateUI;
