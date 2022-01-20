function formOnChange(select) {
    if (select.value === 'crear') {

        divTitle = document.getElementById('div-title');
        divTitle.style.display = "";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "";

        btn = document.getElementById('btn-submit');
        btn.style.display = "";

        divData = document.getElementById('data');
        divData.style.display = "none";

        divLevelGroup = document.getElementById('div-level-group')
        divLevelGroup.style.display = "";

        divMateria = document.getElementById('div-materia')
        divMateria.style.display = "";
    }
    else {

        divTitle = document.getElementById('div-title');
        divTitle.style.display = "none";

        divFirstName = document.getElementById('div-hourlyIntensity');
        divFirstName.style.display = "none";

        btn = document.getElementById('btn-submit');
        btn.style.display = "none";

        divData = document.getElementById('data');
        divData.style.display = "";

        divLevelGroup = document.getElementById('div-level-group')
        divLevelGroup.style.display = "none";
        
        divMateria = document.getElementById('div-materia')
        divMateria.style.display = "none";

        listCourses(link_courses);
    }
}


let link_courses = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/course';

const formCourse = {
    title: document.getElementById('title'),
    hourlyIntensity: document.getElementById('hourlyIntensity'),
    idProfessor: document.getElementById('cProfesor'),
    levelGroup: document.getElementById('levelGroup'),
}

document.getElementById('btn-submit').addEventListener('click', async (e) => {
    e.preventDefault()
    await addCourse()
  })
  

async function addCourse() {

    let data = {
        title: formCourse.title.value,
        hourlyIntensity: formCourse.hourlyIntensity.value,
        idProfessor: formCourse.idProfessor.value,
        levelGroup: formCourse.levelGroup.value,
      }
      let response
    try {
        if (!validateCourses(data)) {
            throw new Error('Corrige los datos.')
        } else {
            const body = JSON.stringify(data)
            response = await fetch(link_courses, {
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
    if (response?.status == 201) {
        alert('Curso creado con exito');
        window.location.href = 'index.html';
    }

}

function validateCourses(args) {
    if (args.title === '') {
      alert('No puede dejar el campo de titulo vacío')
      return false
    }
    if (args.hourlyIntensity === '') {
      alert('No puede dejar el campo de Intensidad Horaria vacío')
      return false
    }
    return true
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


function listCourses() {
    const tbody = document.getElementById('list');
    fetch(link_courses)
        .then(response => response.json())
        .then(data => {
            console.log(data);
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

function listProfesor() {
    const select = document.getElementById('cProfesor');
    fetch('https://61cd235c198df60017aec2ee.mockapi.io/Professor')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    let option = document.createElement('option');
                    option.value = '';
                    option.innerHTML = 'Seleccionar un Profesor';
                    select.appendChild(option);
                }
                let option = document.createElement('option');
                option.value = data[i].identification;
                option.innerHTML = data[i].firstName + ' ' + data[i].secondName + ' ' + data[i].lastName + ' ' + data[i].secondLastName;
                select.appendChild(option);
            }
        });
  }


  function listGroup() {
    const select = document.getElementById('levelGroup');
    fetch('https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/group')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    let option = document.createElement('option');
                    option.value = '';
                    option.innerHTML = 'Seleccionar un Grupo';
                    select.appendChild(option);
                }
                let option = document.createElement('option');
                option.value = data[i].level;
                option.innerHTML = data[i].level;
                select.appendChild(option);
            }
        });
  }
