let button = document.querySelector('#two')
let modal = document.querySelector('.modal')
let modalbg = document.querySelector('.modal-bg')
let cross = document.querySelector('.cross')




button.onclick = () => {
    modal.classList.add('disp')
    modalbg.classList.add('disp')
}

cross.onclick = () => {
    modal.classList.remove('disp')
    modalbg.classList.remove('disp')
}








let header = document.querySelectorAll('.rusuk')
let panel = document.querySelectorAll('.content')
let arrows = document.querySelectorAll('.strelka')


header.forEach((item,idx) => {
    item.onclick = () => {
        panel[idx].classList.toggle('height')
        arrows[idx].classList.toggle('arrow')
        item.classList.toggle('activeAccord')
    }
})
