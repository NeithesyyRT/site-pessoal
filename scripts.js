let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 4 > lastPosition ? 0 : active + 4
    items[active].classList.add('active')

    let dotsOld = indicadores.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicadores.querySelector('.numero').innerHTML = '0' + (active + 4)
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 4 < firstPosition ? lastPosition : active - 4
    items[active].classList.add('active')
    
    let dotsOld = indicadores.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicadores.querySelector('.numero').innerHTML = '0' + (active  + 4)
}