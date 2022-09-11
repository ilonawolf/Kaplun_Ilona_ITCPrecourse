const maps = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342338.25799553556!2d33.08633538961589!3d47.90702073362533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dadfe03154ab7b%3A0xb0fa3a177d6b186e!2z0JrRgNC40LLQuNC5INCg0ZbQsywg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCA1MDAwMA!5e0!3m2!1suk!2sil!4v1661880982808!5m2!1suk!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27015.311980017836!2d34.90324873925164!3d32.17959379399832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d39b32151955f%3A0x8e50c5f354fa376a!2z0JrRhNCw0YAt0KHQsNCy0LA!5e0!3m2!1suk!2sil!4v1661881100705!5m2!1suk!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53659.55938735719!2d34.9817564819242!3d32.799617526929836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2z0KXQsNC50YTQsA!5e0!3m2!1suk!2sil!4v1661881127455!5m2!1suk!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221963.87591979388!2d34.81398085147641!3d29.62735335896122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071e324795e0b%3A0xfe1d95f85577f6db!2z0JXQudC70LDRgg!5e0!3m2!1suk!2sil!4v1661881162153!5m2!1suk!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27082.159060606242!2d34.87685693887692!3d31.95357429860284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca5c5ad106a1%3A0xacee445e07ca811a!2z0JvQvtC0!5e0!3m2!1suk!2sil!4v1661881184689!5m2!1suk!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54151.609100811045!2d34.743367326365195!3d31.975121192559445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b43827ab66ff%3A0x17bcc54a571a7ab8!2z0KDRltGI0L7QvS3Qu9C1LdCm0ZbQvtC9!5e0!3m2!1suk!2sil!4v1661881220185!5m2!1suk!2sil"]


document.getElementById('map').src = maps[0];


let index = 0;

document.getElementById("prevButton").addEventListener("click", prevOnClick);
document.getElementById("nextButton").addEventListener("click", nextOnClick);

function prevOnClick() {
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = false;
    nextButton.classList.remove('button-disable');
    index--;
    document.getElementById('map').src = maps[index];
    if (index == 0) {
        const prevButton = document.getElementById('prevButton');
        prevButton.disabled = true;
        prevButton.classList.add('button-disable');
    }
}

function nextOnClick() {
    const prevButton = document.getElementById('prevButton');
    prevButton.disabled = false;
    prevButton.classList.remove('button-disable');
    index++;
    document.getElementById('map').src = maps[index];
    if (index == maps.length - 1) {
        const nextButton = document.getElementById('nextButton');
        nextButton.disabled = true;
        nextButton.classList.add('button-disable');
    }
}