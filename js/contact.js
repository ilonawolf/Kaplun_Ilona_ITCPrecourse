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