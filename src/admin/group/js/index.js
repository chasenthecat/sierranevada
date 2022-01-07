function formOnChange(select) {
    if (select.value == 'crear') {
        divId = document.getElementById('div-level');
        divId.style.display = "";

        btn = document.getElementById('btn1');
        btn.style.display = "";

        table = document.getElementById('data');
        table.style.display = "none";

    }
    else {
        divId = document.getElementById('div-level');
        divId.style.display = "none";

        btn = document.getElementById('btn1');
        btn.style.display = "none";

        table = document.getElementById('data');
        table.style.display = "";

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
            <button onclick="goedit(${data[i].id})" type="button">Editar</button> | <button type="button" onclick="deleteGroup(${data[i].id})" >borrar</button>
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

