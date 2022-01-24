window.onload = () => {
  if (sessionStorage.getItem('user') == null) {
    window.location.href = './error.html'
  }
}

document.getElementById('logout').addEventListener('click', (e) => {
  e.preventDefault()
  sessionStorage.clear()
  window.location.href = '../login.html'
})

const icon = `
  <svg viewBox="0 0 24 24">
                <g>
                  <path
                    d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"
                  />
                </g>
              </svg>
`

const button = document.getElementById('btnD')

button.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('myDropdown').classList.toggle('show')
})

button.innerHTML = sessionStorage.getItem('ussername') + icon
