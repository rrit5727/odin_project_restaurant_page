
const displayAbout = () => {

  const content = document.getElementById("content");
  // content.textContent = "";

  const contactHeading = document.createElement("H1");
  contactHeading.textContent = "Contact us"

  const contactNumber = document.createElement("h2");
  contactNumber.textContent = "Telephone: 041234567"

  const contactEmail = document.createElement("h2");
  contactEmail.textContent = "Email: PinoDeVino@email.com";

  content.append(contactHeading, contactNumber, contactEmail,)

};

export default displayAbout;