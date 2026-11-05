console.log("Hello")

const displayHeading = () => {
  const divContent = document.getElementById('content');
  const heading = document.createElement('h1');
  heading.textContent = "Pino De Vino's"
  
  divContent.appendChild(heading);

};

displayHeading();
