function formOnChange(select) {
    if (select.value == 'crear') {
        divId = document.getElementById('div-level');
        divId.style.display = "";

        btn = document.getElementById('btn1');
        btn.style.display = "";

        table = document.getElementById('data');
        table.style.display = "none";

        table2 = document.getElementById('data_students');
        table2.style.display = "none";

    }
    else {
        divId = document.getElementById('div-level');
        divId.style.display = "none";

        btn = document.getElementById('btn1');
        btn.style.display = "none";

        table = document.getElementById('data');
        table.style.display = "";

        table2 = document.getElementById('data_students');
        table2.style.display = "";

        listGroup(link_group);
    }
}

const formGroup = {
    data_id: document.getElementById('id'),
    level: document.getElementById('level'),
};


const link_group = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/group';

function addGroup() {
    fetch(link_group, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            level: formGroup.level.value,
        }),

    })
        .then((response) => {
            if (response.status == 200) {
                alert('Se ha creado correctamente');
                window.location.href = "index.html";
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Error al crear el estudiante');
        });
}

function updateGroup(id) {

    fetch(link_group + `/${id}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            level: formGroup.level.value,
        }),
    })
        .then(
            (response) => {
                if (response.status == 200) {
                    alert('Se ha editado correctamente');
                    window.location.href = "index.html";
                }
            })
        .catch((err) => {
            console.log(err);
        });
}

function listGroup(link_group) {
    const tbody = document.getElementById('list');
    fetch(link_group)
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = data[i].id;
                fila.insertCell().innerHTML = data[i].level;
                fila.insertCell().innerHTML = `
            <button onclick="goedit(${data[i].id})" type="button">Editar</button> | <button type="button" onclick="deleteGroup(${data[i].id})" >Borrar</button> | <button type="button" onclick="getStudentbyGroup('${data[i].level}')" >Ver Integrantes</button>
            `;
            }
        });
}

function deleteGroup(id) {
    fetch(link_group + `/${id}`, {
        method: 'DELETE',
    })
        .then(
            (response) => {
                if (response.status == 200) {
                    alert('Se ha eliminado correctamente');
                    window.location.href = "index.html";
                }
            })
        .catch((err) => {
            console.log(err);
        });
}


function goedit(id) {
    window.location.href = "editar.html?id=" + id;
}

let link_student = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/student';

function getStudentbyGroup(group) {
   let group_id = group;
   console.log(link_student + `?levelGroup=${group_id}`);
    const t_body = document.getElementById('list_students');
    fetch(link_student + `?levelGroup=${group_id}`)
        .then(response => response.json())
        .then(data => {
             console.log(data);
            t_body.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                let fila = t_body.insertRow();
                fila.insertCell().innerHTML = data[i].identification;
                fila.insertCell().innerHTML = data[i].firstName + ' ' + data[i].secondName + ' ' + data[i].lastName + ' ' + data[i].secondLastName;
                fila.insertCell().innerHTML = `
            `;
            }
        });
}