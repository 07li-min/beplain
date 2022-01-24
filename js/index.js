$(document).ready(function(){

  AOS.init({
    duration: 3000
  });

  $('.trouble .recom-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:5000,
    autoplay: true,
  });


  $('.moisture .recom-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:5000,
    autoplay: true,
  });


  $('.event2 .mob .img-area').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:3000,
    autoplay: true,
  });



  $('.instagram .insta-list .mob-item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed:5000,
    autoplay: true,
  });


  $('.tab-list .moisture-btn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.tab-content .trouble').addClass('tmp-off')
    $('.tab-content .moisture').removeClass('tmp-off')
  });

  $('.tab-list .trouble-btn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.tab-content .moisture').addClass('tmp-off')
    $('.tab-content .trouble').removeClass('tmp-off')
  });

  $('.tab-content .moisture').addClass('tmp-off');

  $('.faq .faq-list .q-head').on('click',function(){
    $(this).closest('li').toggleClass('active');
    $(this).next().stop(true, true).slideToggle(300);
  });

  $('.quick .share').on('click', function(e){
    e.preventDefault();
    $('.quick').toggleClass('active');
  });


  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.quick').fadeIn();
    }else{
      $('.quick').fadeOut();
    }
  });


  $('.event1 .evt-btn').click(function(e){
    e.preventDefault();
    posY = $(window).scrollTop();
    $("html, body").addClass("not_scroll");
    $('.modal').addClass('active');
  });
  $('.modal .modal-box .close-btn').click(function(){
    $("html, body").removeClass("not_scroll");
    $('.modal').removeClass('active');
    posY = $(window).scrollTop(posY);
  });
  $('.modal .click-box').click(function(){
    $("html, body").removeClass("not_scroll");
    $('.modal').removeClass('active');
    posY = $(window).scrollTop(posY);
  });


  $('.modal .info .zip-btn').click(function(){
    $(function findaddr(){
      new daum.Postcode({
        oncomplete: function(data){
          $('[name=zip]').val(data.zonecode); 
          $('[name=addr1]').val(data.address);
          $('[name=addr2]').val(data.buildingName);
        }
      }).open();
    });
  });


  $('.hd .toggle-btn').click(function(){
    $(this).toggleClass('active')
    $('.hd .mob-gnb').toggleClass('active')
  });

  $('.hd .pc-gnb .dep > a').click(function(e){
    goToHash(this, e);
  });

  $('.hd .mob-gnb .dep > a').click(function(e){
    goToHash(this, e);

    $('.hd .toggle-btn').toggleClass('active');
    $('.hd .mob-gnb').toggleClass('active'); 
  });


  function goToHash(val, e) {
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
});