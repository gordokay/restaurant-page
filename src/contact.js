export default function contact() {
  const content = document.getElementById('content');
  const container = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'contact';

  const phone = document.createElement('p');
  phone.textContent = '000-000-0000';

  const email = document.createElement('p');
  email.textContent = 'hi@toast.com';

  const address = document.createElement('p');
  address.textContent = '100 toast st';

  container.append(h1, phone, email, address);
  content.appendChild(container);
}