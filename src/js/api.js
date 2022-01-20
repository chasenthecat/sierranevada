const form = {
    rol: document.getElementById('rol'),
    identification: document.getElementById('signin-user'),
    password: document.getElementById('signin-password'),
    submit: document.getElementById('signin-btn-submit'),
};

let button = form.submit.addEventListener('click', (e) => {
    e.preventDefault();
    let login = "";
    let rol = "";
    if (form.rol.value === 'value3') {
        login = 'https://61cd235c198df60017aec2ee.mockapi.io/Admins';
        rol = "./admin/index.html"
    }else if (form.rol.value === 'value2') {
        login = 'https://61cd235c198df60017aec2ee.mockapi.io/Professor';
        rol = "./professor/index.html"
    }else if (form.rol.value === 'value1') {
        login = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/student';
        rol = "./student/index.html"
    }

    fetch(login, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        for (let i in data) {
            if (form.identification.value === data[i].identification && form.password.value === data[i].password){
                window.location.href = rol;
                console.log("Login Successful");
                sessionStorage['user'] = form.identification.value;
                sessionStorage['rol'] = form.rol.value;
                sessionStorage['ussername'] = data[i].firstName + " " + data[i].lastName;
                break;
            }else{
                alert("Error Password or Username");
                break;
            }
        }
    })
})