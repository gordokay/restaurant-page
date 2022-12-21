import navbar from './navbar';
import home from './home';
import contact from './contact';
import menu from './menu';

navbar();
home();

const links = document.querySelectorAll('li');
links.forEach(link => {
  link.addEventListener('click', drawPage.bind(this, link.textContent));
})

function clearPage() {
  const content = document.getElementById('content');
  const container = content.querySelector('div');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  content.removeChild(container);
}

function drawPage(page) {
  clearPage();
  switch(page) {
    case 'home':
      home();
      break;
    case 'contact':
      contact();
      break;
    case 'menu':
      menu();
      break;
  }
}