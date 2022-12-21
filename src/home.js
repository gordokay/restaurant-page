export default function home() {
  const content = document.getElementById('content');
  
  const container = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'toast restaurant';

  const image = document.createElement('img');
  image.src = 'toast.png';
  image.alt = 'A delicious slice of toast';

  const p = document.createElement('p');
  p.textContent = 'toast restaurant is your one-stop shop for all things toast'

  container.append(h1, image, p);
  content.appendChild(container);
}