import createHeader from './headerDOM';
import createSideBar from './sidebarDOM';
import generateMain from './mainDOM';
import createFooter from './footerDOM';

const generateUI = () => {
  const content = document.getElementById('content');
  content.classList.add('h-screen', 'grid', 'grid-cols-col', 'grid-rows-row');
  content.append(
    createHeader(),
    createSideBar(),
    generateMain(),
    createFooter()
  );
};

export default generateUI;
