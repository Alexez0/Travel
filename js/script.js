const iconMenuBurger = document.querySelector('.burger')
const spain = document.querySelector('.spain')
const usa = document.querySelector('.usa')
const japan = document.querySelector('.japan')
const images = document.querySelector('.images')
const dotOne = document.querySelector('.dotOne')
const dotTwo = document.querySelector('.dotTwo')
const dotThree = document.querySelector('.dotThree')
const arrowRight = document.querySelector('.right')
const arrowLeft = document.querySelector('.left')
let index = 1

if(iconMenuBurger){
    const menuBurger = document.querySelector('.burger-menu')
    const cross = document.querySelector('.cross')
    iconMenuBurger.addEventListener("click", function (e){
        iconMenuBurger.classList.toggle('active')
        menuBurger.classList.toggle('active')
        cross.addEventListener('click',function (e){
            menuBurger.classList.toggle('out')
            menuBurger.classList.remove('active')
            iconMenuBurger.classList.toggle('out')
            iconMenuBurger.classList.remove('active')
            menuBurger.classList.remove('out')
            iconMenuBurger.classList.remove('out')
        })
    });
}






spain.addEventListener('click', function (e){
    images.classList.add('prev')
    images.classList.remove('next')
    dotOne.classList.add('activeDot')
    dotTwo.classList.remove('activeDot')
    dotThree.classList.remove('activeDot')
})

usa.addEventListener('click', function (e){
    images.classList.add('next')
    images.classList.remove('prev')
    dotThree.classList.add('activeDot')
    dotTwo.classList.remove('activeDot')
    dotOne.classList.remove('activeDot')
})

japan.addEventListener('click',function (e){
    images.classList.remove('next')
    images.classList.remove('prev')
    dotTwo.classList.add('activeDot')
    dotThree.classList.remove('activeDot')
    dotOne.classList.remove('activeDot')
})

dotThree.addEventListener('click', function (e){
    images.classList.add('next')
    images.classList.remove('prev')
    dotThree.classList.add('activeDot')
    dotTwo.classList.remove('activeDot')
    dotOne.classList.remove('activeDot')
})

dotTwo.addEventListener('click',function (e){
    images.classList.remove('next')
    images.classList.remove('prev')
    dotTwo.classList.add('activeDot')
    dotThree.classList.remove('activeDot')
    dotOne.classList.remove('activeDot')

})

dotOne.addEventListener('click',function (e){
    images.classList.add('prev')
    images.classList.remove('next')
    dotOne.classList.add('activeDot')
    dotTwo.classList.remove('activeDot')
    dotThree.classList.remove('activeDot')
})

