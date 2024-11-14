
// Comando em JavaScript, para mudar a cor de fundo.
const chk = document.querySelector('#chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

/*
    Comando para fazer que ao clicar no botão os tenis podem ser 
    trocados nas ordems.
*/
let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container-slide')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

next.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}

/* codigo da nav responsivo */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon i');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.classList.remove('ri-close-fill');
        icon.classList.add('ri-menu-line');
    } else {
        menuMobile.classList.add('open');
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-fill');
    }
}
