const GITHUB_URL = "https://api.github.com/users/ilonawolf";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    document.getElementById("profile-image").src = data.avatar_url;
    document.getElementById("profile-name").innerText = data.name;
  });