window.onload = function () {
  const link_activity =
    'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity'
  listActivities(link_activity)
}

function insertCard(item) {
  let divActivity = document.getElementById('activities')
  divActivity.innerHTML += `
                    <section class="card">
                    <h3><a href="#">${item?.descripcion}</a></h3>
                    <p>Plazo hasta: <em>11:59 p.m.</em></p>
                    <p>Grupo: <em>${item?.grupo}</em></p>
                    <p>Asignatura: <em>${item?.materia}</em></p>
                    </section>`
}

async function listActivities(link_activity) {
  let response

  try {
    response = await fetch(link_activity).then((response) => response.json())
  } catch (error) {
    alert('Error al cargar las actividades')
  }

  const group = sessionStorage.getItem('group')

  console.log(response)

  const activitiesByGroup = response.filter(
    (activity) => activity.grupo === group
  )

  const activityIndicator = document.getElementById('number_activities')

  if (activitiesByGroup.length === 0) {
    activityIndicator.style.display = 'none'
  } else {
    activitiesByGroup.forEach((activity) => insertCard(activity))
    activityIndicator.innerHTML = activitiesByGroup.length
  }
}

document.getElementById('date').innerHTML = new Date().toLocaleDateString(
  'es-CO',
  {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
)
