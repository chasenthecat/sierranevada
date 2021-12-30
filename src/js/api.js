const form = {
    rol: document.getElementById('rol'),
    identification: document.getElementById('signin-user'),
    password: document.getElementById('signin-password'),
    submit: document.getElementById('signin-btn-submit'),
};

let button = form.submit.addEventListener('click', (e) => {
    e.preventDefault();
    let login = "";
    console.log(form.rol.value);
    if (form.rol.value === 'value3') {
        login = 'https://61cd235c198df60017aec2ee.mockapi.io/Admins';
    }else if (form.rol.value === 'value2') {
        login = 'https://61cd235c198df60017aec2ee.mockapi.io/Professor';
    }

    fetch(login, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        for (let i in data) {
            if (form.identification.value === data[i].identification && form.password.value === data[i].password){
                window.location.href = "./admin/index.html";
                console.log("Login Successful");
                break;
            }else{
                alert("Error Password or Username");
                break;
            }
        }
    })
})