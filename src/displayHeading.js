import pizza from './pizza.png';

const displayHeading = () => {

  const contentElement = document.getElementById('content');
  // contentElement.textContent = '';

  const heading = document.createElement('H1');
  heading.textContent = "Welcome to Pino De Vinos";

  const image = document.createElement('img');
  image.src = pizza;

  const text = document.createElement('p');
  text.textContent = "Come visit our restaurant!";

  contentElement.appendChild(heading);
  contentElement.appendChild(image);
  contentElement.appendChild(text);


};

export default displayHeading;