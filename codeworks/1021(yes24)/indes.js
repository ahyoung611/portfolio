


//banner -----------------------------------------------

//swiper1
var swiper1 = new Swiper(".Swiper1", {
    effect: "fade",
    centeredSlides: true,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,// 사용자 상호작용 후에도 자동재생 유지
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//배너 swiper1의 화면전환 ------------------
swiper1.on('slideChangeTransitionStart', function () {
    if (swiper1.autoplay.running) {
        swiper1.params.speed = 1500; // autoplay 중일 때는 서서히 전환
    } else {
        swiper1.params.speed = 0; // 네비게이션 클릭 시 즉각 전환
    }
});

swiper1.on('navigationPrev', function () {
    swiper1.params.speed = 0; // 네비게이션 이전 버튼 클릭 시 즉각 전환
});

swiper1.on('navigationNext', function () {
    swiper1.params.speed = 0; // 네비게이션 다음 버튼 클릭 시 즉각 전환
});

//배너 하단의 page-wrap  클릭시 화면 전환 ----------------
const liElems = document.querySelectorAll('.page-wrap li a')
// console.log(liElems);

liElems.forEach(function (liElem, idx) {
    // console.log(liElem, idx);
    liElem.addEventListener('click', function (e) {
        e.preventDefault()

        liElems.forEach(function (item) {
            item.classList.remove('on')
        })

        liElem.classList.add('on')

        swiper1.slideToLoop(idx, 500)
    })

    liElem.addEventListener('mouseenter', function () {

        liElems.forEach(function (item) {
            item.classList.remove('on')
        })

        liElem.classList.add('on')

    })

})

//slideChange는 활성화된 슬라이드(swiper-slide-active)가 바뀔 때마다 이벤트를 호출
swiper1.on('slideChange', function () {

    //해당 번째 인덱스 값을 get   //진짜 슬라이드의 인덱스 realIndex
    let activeIdx = swiper1.realIndex

    liElems.forEach(function (item) {
        item.classList.remove('on')
    })
    //li 모두를 읽어오면 배열로 지정되어진다. [몇번째]배열번째 활성화를 때문에
    liElems[activeIdx].classList.add('on')
})

//left의 menu-bar 클릭하면 gnb-wrap이 열림 ---------------------------------------
$('.open-btn').click(function () {
    $('.gnb-wrap').css('left', '0')
})

$('.close-btn').click(function () {
    $('.gnb-wrap').css('left', '-100%')
})


//gnb-list1의 menu 슬라이드 
$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown(500)
})

$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp(500)
})

//gnb-list4의 swiper 
var gnbSwiper = new Swiper(".gnbSwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//TICKET OPEN ----------------------------------------------
var tSwiper = new Swiper(".t-Swiper", {
    slidesPerView: 5,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// tabSwiper -----------------------------------------------
var tabSwiper = new Swiper(".tab-Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//tablist에  첫번째 li a.on
$('.tablist li:first-child a').addClass('on')
// 첫번째 tab.on
$('.tab:first-child').addClass('on')

tabFuc('#sect2')
tabFuc('#sect3')

function tabFuc(target) {
    //target 하위에
    let targetElem = document.querySelector(target)
    let aElems = targetElem.querySelectorAll('.tablist li a')



    //$(target).find('.tablist li a').click(function () {
    aElems.forEach(function (a) {
        a.addEventListener('click', function (e) {
            e.preventDefault()

            //$(target).find('.tablist li a').removeClass('on')
            for (let menu of targetElem.querySelectorAll('.tablist li a')) {
                menu.classList.remove('on')
            }
            //$(this).addClass('on')
            this.classList.add('on')

            //let href = $(this).attr('href')
            let href = this.getAttribute('href')

            //$(target).find('.tab').removeClass('on')
            for (let tab of targetElem.querySelectorAll('.tab')) {
                tab.classList.remove('on')
            }

            //$(href).addClass('on')
            targetElem.querySelector(href).classList.add('on')

        })
    })
}


// gridSwiper -----------------------------------------------
var gridSwiper = new Swiper(".grid-Swiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});