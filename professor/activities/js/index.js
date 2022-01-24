const API_URL = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/'

window.onload = async () => {
  accessDenied()

  let selectedGroup

  const selectGroupElement = document.getElementById('levelGroup')

  const selectCourseElement = document.getElementById('pMateria')

  const groups = await fetch(API_URL + 'group').then((response) =>
    response.json()
  )

  groups.forEach((group) => {
    const { level } = group
    const option = document.createElement('option')
    option.value = level
    option.innerHTML = level
    selectGroupElement.appendChild(option)
  })

  selectGroupElement.addEventListener('change', async (e) => {
    selectedGroup = e.target.value
    selectCourseElement.innerHTML =
      '<option value="">Selecciona una materia</option>'
    const courses = await fetch(
      API_URL + `course?levelGroup=${selectedGroup}`
    ).then((response) => response.json())

    courses.forEach((course) => {
      const { title } = course
      const option = document.createElement('option')
      option.value = title
      option.innerHTML = title
      selectCourseElement.appendChild(option)
    })
  })
}

function accessDenied() {
  if (sessionStorage.getItem('user') == null) {
    window.location.href = '../error.html'
  }
}

function closeSesion() {
  sessionStorage.clear()
  window.location.href = '../../login.html'
}
document.getElementById('btnD').innerHTML =
  sessionStorage.getItem('ussername') +
  `<svg viewBox="0 0 24 24">
                <g>
                  <path
                    d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"
                  />
                </g>
              </svg>`

function formOnChange(select) {
  const form = document.getElementById('form')
  const data = document.getElementById('data')
  if (select.value == 'crear') {
    form.style.display = 'block'
    data.style.display = 'none'
  } else {
    form.style.display = 'none'
    data.style.display = 'block'
    listActivity(API_URL + 'activity')
  }
}

function listActivity(link_activity) {
  const tbody = document.getElementById('list')
  fetch(link_activity)
    .then((response) => response.json())
    .then((data) => {
      tbody.innerHTML = ''
      for (let i = 0; i < data.length; i++) {
        let fila = tbody.insertRow()
        fila.insertCell().innerHTML = data[i].descripcion
        fila.insertCell().innerHTML = data[i].materia
        fila.insertCell().innerHTML = data[i].grupo
        fila.insertCell().innerHTML = `
            <button onclick="goedit(${data[i].id})" type="button">Editar</button> | <button type="button" onclick="deleteActivity(${data[i].id})" >Borrar</button>
            `
      }
    })
}

function deleteActivity(id) {
  fetch(API_URL + `activity/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    console.log(response.status)
    if (response.status == 200) {
      alert('Se ha eliminado correctamente')
    }
  })
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
    idprofesor: sessionStorage.getItem('user'),
  }
  let response
  try {
    if (!validateActivity(data)) {
      throw new Error('Corrige los datos.')
    } else {
      const body = JSON.stringify(data)
      response = await fetch(
        'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body,
        }
      )
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
  fetch(API_URL + `activity/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      descripcion: formActividad.descripcion.value,
      grupo: formActividad.grupo.value,
      materia: formActividad.materia.value,
    }),
  })
    .then((response) => {
      if (response.status == 200) {
        alert('Se ha actualizado correctamente')
        window.location.href = './index.html'
      }
    })
    .catch((err) => {
      console.log(err)
      alert('Error al actualizar')
      window.location.href = './index.html'
    })
}
