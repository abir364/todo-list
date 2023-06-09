const createSideBar = () => {
  const sidebar = document.createElement('div');
  sidebar.classList.add(
    'bg-gradient-to-r',
    'from-gray-900',
    'to-slate-900',
    'text-white'
  );
  const content = document.createElement('div');
  content.classList.add(
    'flex',
    'flex-col',
    'pl-6',
    'py-2',
    'items-start',
    'gap-2'
  );
  sidebar.appendChild(content);

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('hover:text-xl');
  homeBtn.textContent = 'Home';
  const todayBtn = document.createElement('button');
  todayBtn.classList.add('hover:text-xl');
  todayBtn.textContent = 'Today';
  const weekBtn = document.createElement('button');
  weekBtn.classList.add('hover:text-xl');
  weekBtn.textContent = 'This week';
  content.append(homeBtn, todayBtn, weekBtn);

  return sidebar;
};
export default createSideBar;
