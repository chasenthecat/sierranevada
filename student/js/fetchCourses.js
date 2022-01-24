const COURSES_API_URL =
  'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/course'

const PROFESSOR_API_URL =
  'https://61cd235c198df60017aec2ee.mockapi.io/Professor'

const ACTIVITY_API_URL =
  'https://61cd1a30198df60017aec2d4.mockapi.io/api/v1/activity'

const group = sessionStorage.getItem('group')

const cardElement = (props) => {
  const { title, hourlyIntensity, professorName, pendingActivities } = props
  const card = document.createElement('section')
  card.className = 'card'
  card.innerHTML = `
   <h3><a href="#">${title} -></a></h3>
   <p>Intensidad horaria <em>${hourlyIntensity}</em></p>
   <p>Profesor: <em>${professorName}</em></p>
   <p>Actividades pendientes: <em>${pendingActivities}</em></p>
  `
  return card
}

const fetchEntity = async (API_URL) => {
  return await fetch(API_URL).then((response) => response.json())
}

window.onload = async () => {
  const coursesElement = document.getElementById('courses')

  const courses = await fetchEntity(COURSES_API_URL)

  const coursesByGroup = courses.filter((course) => course.levelGroup === group)

  const professors = await fetchEntity(PROFESSOR_API_URL)

  const activities = await fetchEntity(ACTIVITY_API_URL)

  const cards = []

  if (coursesByGroup.length === 0) {
    const h3 = document.createElement('h3')
    h3.innerHTML = 'No tienes asignaturas registradas'
    coursesElement.appendChild(h3)
  }

  coursesByGroup.map((course) => {
    const professor = professors.find(
      (professor) => professor?.identification === course?.idProfessor
    )

    const { firstName, secondName, lastName, secondLastName } = professor

    cards.push({
      ...course,
      professorName: [firstName, secondName, lastName, secondLastName].join(
        ' '
      ),
      pendingActivities: activities.filter(
        (activity) =>
          activity?.grupo === group && activity?.materia === course?.title
      )?.length,
    })
  })

  cards.forEach((card) => {
    coursesElement.appendChild(cardElement(card))
  })
}
