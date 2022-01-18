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
                option.value = data[i].id;
                option.innerHTML = data[i].title;
                select.appendChild(option);
            }
        });
}

const formActividad ={
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
        } else{
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