function formOnChange(select) {
    if (select.value == 'crear') {
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

        btn = document.getElementById('btn1');
        btn.style.display = "";

        btn = document.getElementById('btn2');
        btn.style.display = "none";

        btn = document.getElementById('btn3');
        btn.style.display = "none";

    }
    else if (select.value == 'actualizar') {
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

        btn = document.getElementById('btn1');
        btn.style.display = "none";

        btn = document.getElementById('btn2');
        btn.style.display = "";
        
        btn = document.getElementById('btn3');
        btn.style.display = "none";

    }
    else if (select.value == 'eliminar') {
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

        btn = document.getElementById('btn1');
        btn.style.display = "none";

        btn = document.getElementById('btn2');
        btn.style.display = "none";
        
        btn = document.getElementById('btn3');
        btn.style.display = "";
    }
}

const formProfessor = {
    id: document.getElementById('identification'),
    email: document.getElementById('email'),
    firstName: document.getElementById('first-name'),
    secondName: document.getElementById('second-name'),
    lastName: document.getElementById('last-name'),
    secondLastName: document.getElementById('second-last-name'),
};

const link = 'https://61cd235c198df60017aec2ee.mockapi.io/Professor';

function addProfessor() {
    fetch(link, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: formProfessor.id.value,
            firstName: formProfessor.firstName.value,
            secondName: formProfessor.secondName.value,
            lastName: formProfessor.lastName.value,
            secondLastName: formProfessor.secondLastName.value,
            email: formProfessor.email.value,
            password: formProfessor.id.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err);
        });
}

function updateProfessor() {
    fetch(link, {
        method: 'PUT',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: form.id.value,
            firstName: form.firstName.value,
            secondName: form.secondName.value,
            lastName: form.lastName.value,
            secondLastName: form.secondLastName.value,
            email: form.email.value,
            password: form.id.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err);
        });
}

/* let formbuttonProfessor = form.submit.addEventListener('click', (e) => {
    e.preventDefault();
    const login = 'https://61cd235c198df60017aec2ee.mockapi.io/Professor';

    fetch(login, {
        method: 'GET',
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err);
        });
}) */