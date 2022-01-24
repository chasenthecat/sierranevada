const date = new Date()

const calendar = document.getElementById('calendar')

const title = document.createElement('h2')

title.innerText = date.toLocaleDateString('es-CO', {
  month: 'long',
  year: 'numeric',
})

calendar.insertBefore(title, calendar.firstChild)

const month = new Date(date.getFullYear(), date.getMonth(), 0)

const daysInMonth = Array(month.getDate())
  .fill(1)
  .map((m, i) => m + i)

const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

const calendarDays = document.getElementById('calendar-days')

for (let i = 0; i < firstDay; i++) {
  const emptyLi = document.createElement('li')
  calendarDays.appendChild(emptyLi)
}

daysInMonth.forEach((day) => {
  const li = document.createElement('li')
  li.innerHTML = day
  if (day === date.getDate()) {
    li.className = 'active'
  }
  calendarDays.appendChild(li)
})
