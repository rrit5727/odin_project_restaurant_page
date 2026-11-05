
const displayMenu = () => {

  const content = document.getElementById("content");
  // content.textContent = "";

  const heading = document.createElement("H1");
  heading.textContent = "Menu";

  const itemHeading1 = document.createElement("H2");
  itemHeading1.textContent = "Eggs and Bacon";

  const itemDescription1 = document.createElement('p')
  itemDescription1.textContent = "Yummy eggs and bacon cooked your way.";
  
  const itemHeading2 = document.createElement("H2");
  itemHeading2.textContent = "Honey Porridge";
  
  const itemDescription2 = document.createElement('p')
  itemDescription2.textContent = "Organic porridge served with Manuka Honey.";

  content.append(heading, itemHeading1, itemDescription1, itemHeading2, itemDescription2);

};

export default displayMenu;