export default function navbar() {
  const content = document.getElementById('content');

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  
  ['home', 'contact', 'menu'].forEach(page => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `${page}`;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
  })

  nav.appendChild(ul);
  content.appendChild(nav);
}