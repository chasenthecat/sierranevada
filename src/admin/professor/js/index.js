
function formOnChange(select) {
  if (select.value == 'crear') {
    divId = document.getElementById('div-id')
    divId.style.display = ''

    divEmail = document.getElementById('div-email')
    divEmail.style.display = ''

    divFirstName = document.getElementById('div-first-name')
    divFirstName.style.display = ''

    divSecondName = document.getElementById('div-second-name')
    divSecondName.style.display = ''

    divLastName = document.getElementById('div-last-name')
    divLastName.style.display = ''

    divSecondLastName = document.getElementById('div-second-last-name')
    divSecondLastName.style.display = ''

    btn = document.getElementById('btn1')
    btn.style.display = ''

    table = document.getElementById('data')
    table.style.display = 'none'
  } else {
    divId = document.getElementById('div-id')
    divId.style.display = 'none'

    divEmail = document.getElementById('div-email')
    divEmail.style.display = 'none'

    divFirstName = document.getElementById('div-first-name')
    divFirstName.style.display = 'none'

    divSecondName = document.getElementById('div-second-name')
    divSecondName.style.display = 'none'

    divLastName = document.getElementById('div-last-name')
    divLastName.style.display = 'none'

    divSecondLastName = document.getElementById('div-second-last-name')
    divSecondLastName.style.display = 'none'

    btn = document.getElementById('btn1')
    btn.style.display = 'none'

    table = document.getElementById('data')
    table.style.display = ''

    listProfessor(link)
  }
}

const formProfessor = {
  data_id: document.getElementById('id'),
  id: document.getElementById('identification'),
  email: document.getElementById('email'),
  firstName: document.getElementById('first-name'),
  secondName: document.getElementById('second-name'),
  lastName: document.getElementById('last-name'),
  secondLastName: document.getElementById('second-last-name'),
}

const link = 'https://61cd235c198df60017aec2ee.mockapi.io/Professor'

function validateProfessor(args) {
  if (args.identification === '') {
    alert('No puede dejar el campo de identificación vacío')
    return false
  }
  if (args.firstName === '') {
    alert('No puede dejar el campo de nombre vacío')
    return false
  }
  if (args.lastName === '') {
    alert('No puede dejar el campo de apellido vacío')
    return false
  }
  if (args.email === '') {
    alert('No puede dejar el campo de correo vacío')
    return false
  }
  if (args.email.indexOf('@') == -1) {
    alert('El correo no es válido')
    return false
  }
  return true
}

async function addProfessor() {
  let data = {
    identification: formProfessor.id.value,
    firstName: formProfessor.firstName.value,
    secondName: formProfessor.secondName.value,
    lastName: formProfessor.lastName.value,
    secondLastName: formProfessor.secondLastName.value,
    email: formProfessor.email.value,
    password: formProfessor.id.value,
  }
  let response
  try {
    if (!validateProfessor(data)) {
      throw new Error('Corrige los datos.')
    } else {
      const body = JSON.stringify(data)
      response = await fetch(link, {
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
    alert('Se ha creado correctamente')
    window.location.href = 'index.html'
  }
}

document.getElementById('btn-submit').addEventListener('click', async (e) => {
  e.preventDefault()
  await addProfessor()
})

function updateProfessor(id) {
  fetch(link + `/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identification: formProfessor.id.value,
      firstName: formProfessor.firstName.value,
      secondName: formProfessor.secondName.value,
      lastName: formProfessor.lastName.value,
      secondLastName: formProfessor.secondLastName.value,
      email: formProfessor.email.value,
      password: formProfessor.id.value,
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

function listProfessor(link) {
  const tbody = document.getElementById('list')
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      tbody.innerHTML = ''
      for (let i = 0; i < data.length; i++) {
        let fila = tbody.insertRow()
        fila.insertCell().innerHTML = data[i].identification
        fila.insertCell().innerHTML =
          data[i].firstName +
          ' ' +
          data[i].secondName +
          ' ' +
          data[i].lastName +
          ' ' +
          data[i].secondLastName
        fila.insertCell().innerHTML = `
            <button onclick="goedit(${data[i].id})" type="button">Editar</button> | <button type="button" onclick="deleteProfessor(${data[i].id})" >borrar</button>
            `
      }
    })
}

function deleteProfessor(id) {
  fetch(link + `/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (response.status == 200) {
      alert('Se ha eliminado correctamente')
      window.location.href = 'index.html'
    }
  })
}

function goedit(id) {
  window.location.href = 'editar.html?id=' + id
}

var names = sessionStorage.getItem('user');

console.log(names);
