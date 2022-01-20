
window.onload = function () {
    const link_activity = 'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity';
    listActivities(link_activity);
}

async function listActivities(link_activity) {

    let response
    try {
        response = await fetch(link_activity)

    } catch (error) {
        alert('Error al cargar las actividades');
    }

    const group = sessionStorage.getItem('group');

    response.json().then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let number_activities = document.getElementById('number_activities');
            let num
            if (group === data[i].grupo) {
                let divActivity = document.getElementById('activities');
                divActivity.innerHTML += `
                    <section class="card" >
                    <h3><a href="#">${data[i].descripcion}</a></h3>
                    <p>Plazo hasta: <em>11:59 p.m.</em></p>
                    <p>Grupo: <em>${data[i].grupo}</em></p>
                    <p>Asignatura: <em>${data[i].materia}</em></p>
                    </section>
            `;
                num = i + 1;
            }
            else {
                num = 0;
            }
            number_activities.innerHTML = num;
        }
    });
}