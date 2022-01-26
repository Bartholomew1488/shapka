const nextBtn = document.querySelector('.img__btn')
const leftSection = document.querySelectorAll('.section__body__left')




for (sect of leftSection){
   let i = 0
    nextBtn.addEventListener('click', () => {
        i++
        clearImg()
        changesImg()
    })
    
    
    function changesImg(){
        sect.children[i].classList.add('active')
    }

    function clearImg(){
        if (i<3){
            sect.children[i-1].classList.remove('active')
        }else if (i === 3){

            sect.children[0].classList.add('active')
            sect.children[2].classList.remove('active')
            i = 0
        } else{
            
            

        }
        
        
    }
}


 function clearImg1(){
        if (i<3){
            sect.children[i-1].classList.remove('active')
        }else {
            
        }
        
        
    }


const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container__animation')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 1

sidebar.style.top = `-${(slidesCount-1)*100}vh`


upBtn.addEventListener('click', () => {
    changesSlide('up')
})

downBtn.addEventListener('click', () => {
    changesSlide('down')    
})

function changesSlide(direction) {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCount - 1
        }
    }
    
    const height = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
    
}


