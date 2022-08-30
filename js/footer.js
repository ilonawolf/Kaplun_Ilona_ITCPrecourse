const languages = ["HTML", "CSS", "JavaScript"];
let footerText = "";
for (let index = 0; index < languages.length; index++) {
    const language = languages[index];
    if (index == languages.length - 1) {
        footerText = footerText + "and " + language;
    } else if(index == languages.length - 2){
        footerText = footerText + language + " ";
    }else{
        footerText = footerText + language + ", ";
    }
}
const footerTextElement = document.getElementById("footer-text");
const text = document.createTextNode(footerText);

footerTextElement.appendChild(text);

