


const sections = document.querySelectorAll('section')

sections.forEach((sect, i) => {
    sect.addEventListener('wheel', function (e) {
        e.preventDefault()

        let delta = e.deltaY

        if (delta < 0 && i === 0) {
            return
        } else if (delta > 0 && i === sections.length - 1) {
            return
        }

        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (secTop) {
            let targetSecTop = secTop.offsetTop
            window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
        }
    })
})


var swiper = new Swiper(".swiper1", {
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    slidesPerView: 4,
    spaceBetween: 30,

    // 브레이크포인트 설정 (반응형)
    breakpoints: {
        // 화면의 가로 너비가 768px 이하일 때 (모바일)
        768: {
            slidesPerView: 4,     // 모바일에서는 2개의 슬라이드만 표시
            spaceBetween: 30,     // 슬라이드 간의 간격 좁게 설정
        },

        480: {
            slidesPerView: 2,     // 모바일에서는 2개의 슬라이드만 표시
            spaceBetween: 10,     // 슬라이드 간의 간격 좁게 설정
        }
    }
});




