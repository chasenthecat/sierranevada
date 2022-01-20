

const formGroup = {
    data_id: document.getElementById('id'),
    level: document.getElementById('level'),
};




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
            <button type="button" onclick="deleteGroup(${data[i].id})" >Borrar</button> | <button type="button" onclick="getStudentbyGroup('${data[i].level}')" >Ver Integrantes</button>
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

let link_students = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/student';

function getStudentbyGroup(group) {
   let group_id = group;
   console.log(link_students + `?levelGroup=divActivity`);
    const t_body = document.getElementById('list_students');
    fetch(link_students + `?levelGroup=${group_id}`)
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