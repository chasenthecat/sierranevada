const form = {
  rol: document.getElementById('rol'),
  identification: document.getElementById('signin-user'),
  password: document.getElementById('signin-password'),
  submit: document.getElementById('signin-btn-submit'),
}

const LINKS = {
  value1: {
    login: 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/student',
    rol: './student/index.html',
  },
  value2: {
    login: 'https://61cd235c198df60017aec2ee.mockapi.io/Professor',
    rol: './professor/index.html',
  },
  value3: {
    login: 'https://61cd235c198df60017aec2ee.mockapi.io/Admins',
    rol: './admin/index.html',
  },
}

form.submit.addEventListener('click', async (e) => {
  e.preventDefault()
  const { rol, identification, password } = form
  const selectedOption = LINKS[rol.value]
  try {
    const response = await fetch(selectedOption?.login, {
      method: 'GET',
    }).then((response) => response.json())

    const user = response.find(
      (user) =>
        user.identification === identification.value &&
        user.password === password.value
    )

    if (user) {
      window.location.href = selectedOption?.rol
      sessionStorage['user'] = identification.value
      sessionStorage['rol'] = rol.value
      sessionStorage['ussername'] = [user.firstName, user.lastName].join(' ')
    } else {
      alert('Error Password or Username')
    }
  } catch (e) {
    alert('error al iniciar sesión')
  }
})
