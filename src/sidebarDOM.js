const createSideBar = () => {
  const sidebar = document.createElement('div');
  sidebar.textContent = 'sidebar dummy';
  sidebar.classList.add(
    'bg-gradient-to-r',
    'from-gray-900',
    'to-slate-900',
    'text-white'
  );
  return sidebar;
};
export default createSideBar;
