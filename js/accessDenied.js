window.onload = function () {
    accessDenied()
  }
  
  function accessDenied() {
    if (sessionStorage.getItem('user') == null) {
        window.location.href = "../error.html";
    }
  }