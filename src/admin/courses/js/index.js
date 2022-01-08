function formOnChange(select) {
    if (select.value == 'crear') {

        divTitle = document.getElementById('div-title');
        divTitle.style.display = "";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "";

        btn = document.getElementById('btn');
        btn.style.display = "";

        divData = document.getElementById('data');
        divData.style.display = "none";
    }
    else {
        divTitle = document.getElementById('div-title');
        divTitle.style.display = "none";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "none";

        btn = document.getElementById('btn');
        btn.style.display = "none";

        divData = document.getElementById('data');
        divData.style.display = "";
        
    }
}


let link_courses = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/course';

const formCourse = {
    title: document.getElementById('title'),
    hourlyIntensity: document.getElementById('hourlyIntensity'),
}

function addCourse() {

    fetch(link_courses, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: formCourse.title.value,
            hourlyIntensity: formCourse.hourlyIntensity.value,
        }),
    })
        .then(data => {
            if (data.status == 201) {
                alert('Curso creado con exito');
                window.location.href = 'index.html';
            }
        }).catch(err => {
            console.log(err);
            alert('Error al crear el curso');
        });
}

function getCourse() {
    const tbody = document.getElementById('list');
    fetch(link_courses)
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = data[i].identification;
                fila.insertCell().innerHTML = data[i].firstName + ' ' + data[i].secondName + ' ' + data[i].lastName + ' ' + data[i].secondLastName;
                fila.insertCell().innerHTML = `
            <button onclick="goedit(${data[i].id})" type="button">Editar</button> | <button type="button" onclick="deleteProfessor(${data[i].id})" >borrar</button>
            `;
            }
        });
}