
// menu
$('.left-menu li.main-menu').mouseenter(function(){
    $('.left-menu .sub-menu').stop().slideDown(200)
    $('header').addClass('on')
})

$('.left-menu').mouseleave(function(){
    $('.left-menu .sub-menu').stop().slideUp(200)
    $('header').removeClass('on')
})

$('.right-menu li.main-menu').mouseenter(function(){
    $('.right-menu .sub-menu').stop().slideDown(200)
    $('header').addClass('on')
})

$('.right-menu').mouseleave(function(){
    $('.right-menu .sub-menu').stop().slideUp(200)
    $('header').removeClass('on')
})

//sect1 -----------------------------------------------------

var swiper1 = new Swiper(".Swiper1", {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });


// prev & next 네비게이션 --------------
  let prev = document.querySelectorAll('.prev')
  let next = document.querySelectorAll('.next')

  prev.forEach(function(prevElem){
    prevElem.addEventListener('mouseenter',function(){
        this.querySelector('path').setAttribute('d','M 40 10 Q 10 65 40 140')
        
    })
  
    prevElem.addEventListener('mouseleave',function(){
        this.querySelector('path').setAttribute('d','M 40 10 Q 40 65 40 140')
    })
  })
  
 
  next.forEach(function(nextElem){
    nextElem.addEventListener('mouseenter',function(){
        this.querySelector('path').setAttribute('d','M 10 10 Q 40 65 10 140')
    })
  
    nextElem.addEventListener('mouseleave',function(){
        this.querySelector('path').setAttribute('d','M 10 10 Q 10 65 10 140')
    })
  })
 

//sect2 ----------------------------------------------------------

//next, prev 버튼 시 hslide, vslide 전환
$('.sect2-next').click(function (e) {
    // alert()
    e.preventDefault();
    $('.vslide-wrap').stop().animate({ 'top': '-200%' }, function () {
        $('.vslide').first().appendTo('.vslide-wrap')
        $('.vslide-wrap').css({ 'top': '-100%' })
    })
    $('.hslide-wrap').stop().animate({ 'left': '-200%' }, function () {
        $('.hslide').first().appendTo('.hslide-wrap')
        $('.hslide-wrap').css({ 'left': '-100%' })
    })

})

$('.sect2-prev').click(function (e) {
    // alert()
    e.preventDefault();
    $('.vslide-wrap').stop().animate({ 'top': '0' }, function () {
        $('.vslide').last().prependTo('.vslide-wrap')
        $('.vslide-wrap').css({ 'top': '-100%' })
    })
    $('.hslide-wrap').stop().animate({ 'left': '0' }, function () {
        $('.hslide').last().prependTo('.hslide-wrap')
        $('.hslide-wrap').css({ 'left': '-100%' })
    })

})


$('.tab-menu li').click(function(e){
    e.preventDefault();

    let idx = $(this).index();
    console.log(idx);

    $(this).closest('.tab-menu').find('a').removeClass('on') //closest = 가장 가까운
    $(this).find('a').addClass('on');

    $('.vslide').css('opacity', 0); // 모든 슬라이드 숨기기
    $('.vslide').eq(idx).animate({
        'opacity': 1 // 선택된 슬라이드만 서서히 나타나기
    }, 1500);

    $('.vslide-wrap').animate({'top': idx * -100 + '%'}, 1000);

    // hslide-wrap은 수직으로 슬라이드 (top 애니메이션)
    $('.hslide-wrap').animate({'left': idx * -100 + '%'}, 1000); 
  
});
