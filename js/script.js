const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__body')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open-menu')
    menu.classList.toggle('menu-open')
})


function onEntry(entry){
    setTimeout(() => {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('_active')
            }
            else{
                if(!change.target.classList.contains('anim-no-hide')){
                    change.target.classList.remove('_active')
                }
                
            }
        })
    }, 100);
    
}

let options = {
    threshold: [0]
}
let observser = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation-title, .card-animation');

for (let elm of elements){
    observser.observe(elm);
}