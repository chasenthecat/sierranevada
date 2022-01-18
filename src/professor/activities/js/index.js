
function formOnChange(select) {
    if (select.value == 'crear') {

        divActivity = document.getElementById('div-actividad')
        divActivity.style.display = ''

        divLevelGroup = document.getElementById('div-level-group')
        divLevelGroup.style.display = ''

        divMaterial = document.getElementById('div-materia')
        divMaterial.style.display = ''

        divBtn1 = document.getElementById('btn1')
        divBtn1.style.display = ''

        divData = document.getElementById('data')
        divData.style.display = 'none'

    } else {
        divActivity = document.getElementById('div-actividad')
        divActivity.style.display = 'none'

        divLevelGroup = document.getElementById('div-level-group')
        divLevelGroup.style.display = 'none'

        divMaterial = document.getElementById('div-materia')
        divMaterial.style.display = 'none'

        divBtn1 = document.getElementById('btn1')
        divBtn1.style.display = 'none'

        divData = document.getElementById('data')
        divData.style.display = ''

        listActivity(link_activity)
    }
}


function listGroup() {
    const select = document.getElementById('levelGroup');
    fetch('https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/group')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    let option = document.createElement('option');
                    option.value = '';
                    option.innerHTML = 'Seleccionar un Grupo';
                    select.appendChild(option);
                }
                let option = document.createElement('option');
                option.value = data[i].level;
                option.innerHTML = data[i].level;
                select.appendChild(option);
            }
        });
}
const link_activity = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity'

function listActivity(link_activity) {
    const tbody = document.getElementById('list');
    fetch(link_activity)
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = data[i].descripcion;
                fila.insertCell().innerHTML = data[i].materia;
                fila.insertCell().innerHTML = data[i].grupo;
                fila.insertCell().innerHTML = `
            <button onclick="goedit(${data[i].id})" type="button">Editar</button> | <button type="button" onclick="deleteActivity(${data[i].id})" >Borrar</button>
            `;
            }
        });
}

function deleteActivity(id) {
    fetch(link_activity + `/${id}`, {
        method: 'DELETE',
    })
        .then((response) => {
            console.log(response.status);
            if (response.status == 200) {
                alert('Se ha eliminado correctamente');
            }
        })
}

function listMateria() {
    const select = document.getElementById('pMateria');
    fetch('https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/course')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    let option = document.createElement('option');
                    option.value = '';
                    option.innerHTML = 'Seleccionar un Materia';
                    select.appendChild(option);
                }
                let option = document.createElement('option');
                option.value = data[i].title;
                option.innerHTML = data[i].title;
                select.appendChild(option);
            }
        });
}

const formActividad = {
    descripcion: document.getElementById('actividad'),
    grupo: document.getElementById('levelGroup'),
    materia: document.getElementById('pMateria'),
}


function validateActivity(args) {
    if (args.descripcion === '') {
        alert('No puede dejar el campo de identificación vacío')
        return false
    }
    if (args.materia === '') {
        alert('No puede dejar el campo de nombre vacío')
        return false
    }
    if (args.grupo === '') {
        alert('No puede dejar el campo de apellido vacío')
        return false
    }
    if (args.idprofesor === '') {
        alert('No puede dejar el campo de correo vacío')
        return false
    }
    return true
}

async function addActivity() {

    let data = {
        descripcion: formActividad.descripcion.value,
        materia: formActividad.materia.value,
        grupo: formActividad.grupo.value,
        idprofesor: sessionStorage.getItem('user')
    }
    let response
    try {
        if (!validateActivity(data)) {
            throw new Error('Corrige los datos.')
        } else {
            const body = JSON.stringify(data)
            response = await fetch('https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity', {
                method: 'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body,
            })
        }
    } catch (err) {
        alert(err)
    }

    if (response?.status === 201) {
        alert('Actividad Agregada')
        window.location.href = 'index.html'
    }
}

document.getElementById('btn-submit').addEventListener('click', async (e) => {
    e.preventDefault()
    await addActivity()
})

function goedit(id) {
    window.location.href = 'editar.html?id=' + id
}

function updateActivity(id) {
    fetch('https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity' + `/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        descripcion: formActividad.descripcion.value,
        materia: formActividad.materia.value,
        grupo: formActividad.grupo.value,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          alert('Se ha actualizado correctamente')
          window.location.href = 'index.html'
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }