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

function deleteCourse(id) {
    fetch(link_courses + '/' + id, {
        method: 'DELETE',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then(data => {
            if (data.status == 200) {
                alert('Curso eliminado con exito');
                window.location.href = 'index.html';
            }
        }).catch(err => {
            console.log(err);
            alert('Error al eliminar el curso');
        });
}


window.onload = function () {
    const tbody = document.getElementById('list');
    fetch(link_courses)
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = data[i].title;
                fila.insertCell().innerHTML = data[i].hourlyIntensity;
                fila.insertCell().innerHTML = `
                <button type="button" onclick="deleteCourse(${data[i].id})" >Borrar</button>
            `;
            }
        });
}

