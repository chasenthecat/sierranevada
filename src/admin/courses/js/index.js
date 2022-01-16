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

        listCourses(link_courses);
    }
}


let link_courses = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/course';

const formCourse = {
    title: document.getElementById('title'),
    hourlyIntensity: document.getElementById('hourlyIntensity'),
}

document.getElementById('btn-submit').addEventListener('click', async (e) => {
    e.preventDefault()
    await addCourse()
  })
  

async function addCourse() {

    let data = {
        title: formCourse.title.value,
        hourlyIntensity: formCourse.hourlyIntensity.value,
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

