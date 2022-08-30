const GITHUB_URL = "https://api.github.com/users/ilonawolf";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    document.getElementById("profile-image").src = data.avatar_url;
    document.getElementById("profile-name").innerText = data.name;
  });

function cardOnClick(){
  const element = document.getElementById('card');
  element.classList.add('noHover');
  element.classList.add('home-card-on-click-animation');
  setTimeout(() => {
    element.classList.remove('home-card-on-click-animation');
    element.classList.remove('noHover');
  }, 3000);
}