export default function menu() {
  const content = document.getElementById('content');
  const container = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'menu';

  container.appendChild(h1);

  const toastTypes = ['sourdough', 'multigrain', 'whole wheat', 'pumpernickel'];
  toastTypes.forEach(toastType => {
    const h2 = document.createElement('h2');
    h2.textContent = `${toastType}`;
    container.appendChild(h2);
  })

  content.appendChild(container);
}