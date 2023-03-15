import './style.css';

import createHeader from './headerDOM';
import createFooter from './footerDOM';

const content = document.getElementById('content');
content.classList.add(
  'bg-gradient-to-r',
  'from-gray-900',
  'to-slate-900',
  'min-h-screen',
  'text-white'
);
content.append(createHeader());
