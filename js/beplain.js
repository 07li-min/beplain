$(document).ready(function(){
  AOS.init();
  // 슬라이드
  $('.trouble .recom-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:5000,
    autoplay: true,
  });

  // 슬라이드
  $('.moisture .recom-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:5000,
    autoplay: true,
  });

  // evt2 모바일 슬라이드
  $('.event2 .mob .img-area').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:3000,
    autoplay: true,
  });


  // 인스타 모바일
  $('.instagram .insta-list .mob-item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:5000,
    autoplay: true,
  });








  // 탭
  $('.tab-list .moisture-btn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.tab-content .trouble').addClass('tmp-off')
    $('.tab-content .moisture').removeClass('tmp-off')
    console.log('수분');
  });

  $('.tab-list .trouble-btn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.tab-content .moisture').addClass('tmp-off')
    $('.tab-content .trouble').removeClass('tmp-off')
    console.log('트러블');
  });
  // 문서 모두 로딩 후 숨김처리
  $('.tab-content .moisture').addClass('tmp-off');



  // FAQ 
  $('.faq .faq-list .q-head').on('click',function(){
    console.log('클릭');
    // 열고
    $(this).closest('li').toggleClass('active');
    console.log('this', this);
    // 닫기
    $(this).next().stop(true, true).slideToggle(300);
  });

  // 퀵버튼 : sns
  $('.quick .share').on('click', function(e){
    e.preventDefault();

    $('.quick').toggleClass('active');
  });
  // 퀵버튼 보이는 시점조절
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.quick').fadeIn();
    }else{
      $('.quick').fadeOut();
    }
  });



  // 모달/팝업
  // 열고
  $('.event1 .evt-btn').click(function(e){
    e.preventDefault();
    posY = $(window).scrollTop();

    $("html, body").addClass("not_scroll");
    $('.modal').addClass('active');
    console.log('on')
  });
  // 닫기(1)
  $('.modal .modal-box .close-btn').click(function(){
    $("html, body").removeClass("not_scroll");
    $('.modal').removeClass('active');
    posY = $(window).scrollTop(posY);
    console.log('off')
  });
  // 닫기(2)
  $('.modal .click-box').click(function(){
    $("html, body").removeClass("not_scroll");
    $('.modal').removeClass('active');
    posY = $(window).scrollTop(posY);
    console.log('off')
  });


  // 이벤트팝업 주소검색창
  $('.modal .info .zip-btn').click(function(){
    $(function findaddr(){
      new daum.Postcode({
        oncomplete: function(data){
          $('[name=zip]').val(data.zonecode); // 우편번호 (5자리)
          $('[name=addr1]').val(data.address);
          $('[name=addr2]').val(data.buildingName);
        }
      }).open();
    });
  });


  // 햄버거메뉴 열기
  $('.hd .toggle-btn').click(function(){
    $(this).toggleClass('active')
    $('.hd .mob-gnb').toggleClass('active')
  });

  $('.hd .pc-gnb .dep > a').click(function(e){
    // 스크롤이동
    goToHash(this, e);
  });

  $('.hd .mob-gnb .dep > a').click(function(e){
    // console.log(this, e);
    // 스크롤이동
    goToHash(this, e);

    // 모바일일때만 버튼 활성 비활성
    $('.hd .toggle-btn').toggleClass('active');
    $('.hd .mob-gnb').toggleClass('active'); 
  });

  // pc 모바일 공통 스크롤 이동
  function goToHash(val, e) {
    console.log('0000val', val);
    if(val.hash){
      e.preventDefault();
      var targetPos;

      if(val.hash == '#recom') {
        targetPos = $(val.hash).offset().top;
      }else {
        targetPos = $(val.hash).offset().top - 80;
      }
      if(val.hash == '#faq') {
        targetPos = $(val.hash).offset().top;
      }
      
      $('body, html').animate({'scrollTop' : targetPos});
    }
  }


  $( window ).resize(function(){
    // 윈도우 창 크기 변화 감지 (없어도됨)
    var windowWidth = $( window ).width();
    console.log('크기변화 = ' + windowWidth + '입니다');
    // 문자열 잇기 : +
    // '문자열' + 변수 + '문자열'
    $('.promotion-list').slick('resize');
  });

});


// a태그 기본기능(이동) 막는 : e.preventdefault()  / function(e) <- e 넣어줘야함
// for() : 반복문이다. 무언가를 반복시킨다는 뜻