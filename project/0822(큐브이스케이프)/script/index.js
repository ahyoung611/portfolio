


const sections = document.querySelectorAll('section')

sections.forEach((sect, i) =>{
    sect.addEventListener('wheel',function(e){
        e.preventDefault()

        let delta = e.deltaY

        if(delta < 0 && i === 0){
            return
        }else if(delta > 0 && i === sections.length-1){
            return
        }

        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if(secTop){
            let targetSecTop =secTop.offsetTop
            window.scrollTo({top :targetSecTop, behavior:'smooth'})
        }
    })
})


