
$('#right-s').click(function () {
    $('.art1-left').addClass('on')
    $('.art2.left').addClass('on')
})

$('#left-s').click(function () {
    $('.art1-right').addClass('on')
    $('.art2.right').addClass('on')
})

$('#angel').click(function () {
    $('.art1-end').addClass('on')
    $('.art2.end').addClass('on')
})

$(".hidden-text").mCustomScrollbar({
    theme: "minimal-dark"
});

$('.hidden-text').on('mouseleave',function(){
    $(this).mCustomScrollbar('scrollTo','0')
})

var swiper = new Swiper(".mySwiper", {

    initialSlide: 4, // 인덱스 4(5번째 슬라이드)부터 시작
    // 추가 설정 옵션들
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    // 기타 옵션들

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

   
});


