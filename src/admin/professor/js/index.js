function formOnChange(select) {
    if(select.value == 'crear') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-email');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-first-name');
        divFirstName.style.display = "";

        divSecondName = document.getElementById('div-second-name');
        divSecondName.style.display = "";

        divLastName = document.getElementById('div-last-name');
        divLastName.style.display = "";

        divSecondLastName = document.getElementById('div-second-last-name');
        divSecondLastName.style.display = "";
    }
    else if(select.value == 'actualizar') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-email');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-first-name');
        divFirstName.style.display = "";

        divSecondName = document.getElementById('div-second-name');
        divSecondName.style.display = "";

        divLastName = document.getElementById('div-last-name');
        divLastName.style.display = "";

        divSecondLastName = document.getElementById('div-second-last-name');
        divSecondLastName.style.display = "";


    }
    else if(select.value == 'eliminar') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-email');
        divEmail.style.display = "none";

        divFirstName = document.getElementById('div-first-name');
        divFirstName.style.display = "none";

        divSecondName = document.getElementById('div-second-name');
        divSecondName.style.display = "none";

        divLastName = document.getElementById('div-last-name');
        divLastName.style.display = "none";

        divSecondLastName = document.getElementById('div-second-last-name');
        divSecondLastName.style.display = "none";
    }
}

const formProfessor = {
    id: document.getElementById('identification'),
    email: document.getElementById('email'),
    firstName: document.getElementById('first-name'),
    secondName: document.getElementById('second-name'),
    lastName: document.getElementById('last-name'),
    secondLastName: document.getElementById('second-last-name')
};

let formbuttonProfessor = form.submit.addEventListener('click', (e) => {
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