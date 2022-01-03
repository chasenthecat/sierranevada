function formOnChange(select) {
    if(select.value == 'crear') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-email');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-first-name');
        divFirstName.style.display = "";

        divSecondName = document.getElementById('div-second-name');
        divSecondName.style.display = "";

        divLastName = document.getElementById('div-last-name');
        divLastName.style.display = "";

        divSecondLastName = document.getElementById('div-second-last-name');
        divSecondLastName.style.display = "";
    }
    else if(select.value == 'actualizar') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-email');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-first-name');
        divFirstName.style.display = "";

        divSecondName = document.getElementById('div-second-name');
        divSecondName.style.display = "";

        divLastName = document.getElementById('div-last-name');
        divLastName.style.display = "";

        divSecondLastName = document.getElementById('div-second-last-name');
        divSecondLastName.style.display = "";


    }
    else if(select.value == 'eliminar') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-email');
        divEmail.style.display = "none";

        divFirstName = document.getElementById('div-first-name');
        divFirstName.style.display = "none";

        divSecondName = document.getElementById('div-second-name');
        divSecondName.style.display = "none";

        divLastName = document.getElementById('div-last-name');
        divLastName.style.display = "none";

        divSecondLastName = document.getElementById('div-second-last-name');
        divSecondLastName.style.display = "none";
    }
}
