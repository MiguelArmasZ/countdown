const countdown = document.querySelector('.countdown')

function getDateInfo(date) {
  const days = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

setInterval(() => {
  const futureDate = new Date('07/25/2022 23:59:59')
  const currentDate = new Date(Date.now())

  const future = getDateInfo(futureDate)
  const current = getDateInfo(currentDate)

  const { days, hours, minutes, seconds } = future

  const {
    days: DAYS,
    hours: HOURS,
    minutes: MINUTES,
    seconds: SECONDS
  } = current

  const rest = {
    restDays: () => days - DAYS,
    restHours: () => hours - HOURS,
    restMinutes: () => minutes - MINUTES,
    restSeconds: () => seconds - SECONDS
  }

  const { restDays, restHours, restMinutes, restSeconds } = rest

  const string = `
        ${restDays()}
        <span> días </span>
        ${restHours()}
        <span> horas </span>
        ${restMinutes()}
        <span> minutos </span>
        ${restSeconds()}
        <span> segundos </span>
      `

  countdown.innerHTML = string
}, 1000)
