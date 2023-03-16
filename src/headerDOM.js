const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add(
    'px-4',
    'py-6',
    'bg-rose-400',
    'flex',
    'items-center',
    'justify-around',
    'sticky',
    'top-0',
    'col-start-1',
    'col-end-3'
  );

  const logoBlock = document.createElement('div');
  logoBlock.classList.add(
    'text-white',
    'text-2xl',
    'font-bold',
    'flex',
    'gap-2',
    'items-center',
    'justify-around'
  );

  const logo = document.createElement('span');
  logo.classList.add('material-symbols-outlined', 'text-4xl');
  logo.textContent = 'data_check';

  const siteName = document.createElement('div');
  siteName.textContent = 'Todo List';

  logoBlock.append(logo, siteName);

  header.append(logoBlock);

  return header;
};
export default createHeader;
