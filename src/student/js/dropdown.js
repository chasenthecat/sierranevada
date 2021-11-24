const myFunction = () => {
  document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = (e) => {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById('myDropdown')
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show')
    }
  }
}

export default myFunction
