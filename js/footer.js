const languages = ["HTML", "CSS", "JavaScript"];
let footerText = "";

if (languages.length == 1) {
    footerText = languages[0];
} else if (languages.length > 1) {
    footerText = languages.slice(0, -1).join(', ') + ' and ' + languages[languages.length - 1];
}

const footerTextElement = document.getElementById("footer-text");
const text = document.createTextNode(footerText);

footerTextElement.appendChild(text);

