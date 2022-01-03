function formOnChange(select) {
    if(select.value == 'crear') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-description');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "";

    }
    else if(select.value == 'actualizar') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-description');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "";

    }
    else if(select.value == 'eliminar') {
        divId = document.getElementById('div-id');
        divId.style.display = "";
        
        divEmail = document.getElementById('div-description');
        divEmail.style.display = "";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "none";
    }
}
