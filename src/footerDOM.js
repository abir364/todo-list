export default function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('bg-rose-400', 'py-4', 'text-center', 'text-white');
  const p = document.createElement('p');
  p.textContent = 'copyright © 2021 abir364';
  footer.append(p);
  return footer;
}
