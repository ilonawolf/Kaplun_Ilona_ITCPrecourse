document.getElementById("firstName").addEventListener("keyup", formChange);
document.getElementById("birthday").addEventListener("keyup", formChange);
document.getElementById("email").addEventListener("keyup", formChange);
document.getElementById("password").addEventListener("keyup", formChange);

function formChange() {
    const firstName = document.getElementById("firstName").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let disabled = true;
    if (firstName && birthday && email && password) {
        disabled = false;
    }

    document.getElementById("buttonRegister").disabled = disabled;

}