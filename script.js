const digitalElement = document.querySelector('.digital')
const hElement = document.querySelector('.p_h')
const mElement = document.querySelector('.p_m')
const sElement = document.querySelector('.p_s')

const updateClock = () => {
    const now = new Date()

    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()

   digitalElement.textContent = `${fixZero(h)}:${fixZero(m)}:${fixZero(s)}`

   sElement.style.transform = `rotate(${(s*6) -90}deg)`
   mElement.style.transform = `rotate(${(m*6) -90}deg)`
   hElement.style.transform = `rotate(${(h*30) + (m/2.3) -90}deg)`
}

const fixZero = time => time<10 ? `0${time}` : time

setInterval(updateClock,1000)