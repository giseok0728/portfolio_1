var ytbSwiper = new Swiper(".mySwiper", {
    // slidesPerView : 2,
    // spaceBetween: 24,
    loop : true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 24
      },
      1024:{
        slidesPerView: 4,
        spaceBetween: 24
      }
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });


  $(document).ready(function(){
    $(".news_tt").click(function(){
      $(this).addClass("on");
      $(this).siblings().removeClass("on");
    })
  });



  $(document).ready(function(){
    $('.news_tt a').click(function(){
      let opticon = $(this).attr('data-opticon');
      if(opticon == 'PC_NEW_1'){
        $('.news_ul1 .PC_NEW_2').hide()
        $('.news_ul1 .PC_NEW_3').hide()
        $('.news_ul1 .PC_NEW_4').hide()
        $('.news_ul1 .PC_NEW_5').hide()
        $('.news_ul1 .PC_NEW_1').show()
        // 
        $('.news_ul2 .PC_NEW_2').hide()
        $('.news_ul2 .PC_NEW_3').hide()
        $('.news_ul2 .PC_NEW_4').hide()
        $('.news_ul2 .PC_NEW_5').hide()
        $('.news_ul2 .PC_NEW_1').show()
      }else if(opticon == 'PC_NEW_2'){
        $('.news_ul1 .PC_NEW_1').hide()
        $('.news_ul1 .PC_NEW_3').hide()
        $('.news_ul1 .PC_NEW_4').hide()
        $('.news_ul1 .PC_NEW_5').hide()
        $('.news_ul1 .PC_NEW_2').show()
        //
        $('.news_ul2 .PC_NEW_1').hide()
        $('.news_ul2 .PC_NEW_3').hide()
        $('.news_ul2 .PC_NEW_4').hide()
        $('.news_ul2 .PC_NEW_5').hide()
        $('.news_ul2 .PC_NEW_2').show() 
      }else if(opticon == 'PC_NEW_3'){
        $('.news_ul1 .PC_NEW_1').hide()
        $('.news_ul1 .PC_NEW_2').hide()
        $('.news_ul1 .PC_NEW_4').hide()
        $('.news_ul1 .PC_NEW_5').hide()
        $('.news_ul1 .PC_NEW_3').show()
        // 
        $('.news_ul2 .PC_NEW_1').hide()
        $('.news_ul2 .PC_NEW_2').hide()
        $('.news_ul2 .PC_NEW_4').hide()
        $('.news_ul2 .PC_NEW_5').hide()
        $('.news_ul2 .PC_NEW_3').show()
      }else if(opticon == 'PC_NEW_4'){
        $('.news_ul1 .PC_NEW_1').hide()
        $('.news_ul1 .PC_NEW_2').hide()
        $('.news_ul1 .PC_NEW_3').hide()
        $('.news_ul1 .PC_NEW_5').hide()
        $('.news_ul1 .PC_NEW_4').show()
        // 
        $('.news_ul2 .PC_NEW_1').hide()
        $('.news_ul2 .PC_NEW_2').hide()
        $('.news_ul2 .PC_NEW_3').hide()
        $('.news_ul2 .PC_NEW_5').hide()
        $('.news_ul2 .PC_NEW_4').show()
      }else if(opticon == 'PC_NEW_5'){
        $('.news_ul1 .PC_NEW_1').hide()
        $('.news_ul1 .PC_NEW_2').hide()
        $('.news_ul1 .PC_NEW_3').hide()
        $('.news_ul1 .PC_NEW_4').hide()
        $('.news_ul1 .PC_NEW_5').show()
        // 
        $('.news_ul2 .PC_NEW_1').hide()
        $('.news_ul2 .PC_NEW_2').hide()
        $('.news_ul2 .PC_NEW_3').hide()
        $('.news_ul2 .PC_NEW_4').hide()
        $('.news_ul2 .PC_NEW_5').show()
      }
    })
  });

  $(document).ready(function(){
    $('.m-news-a').click(function(){
      let opticon = $(this).attr('data-opticon');
      if(opticon == 'm_new1'){
        $('.m_new2').hide()
        $('.m_new3').hide()
        $('.m_new4').hide()
        $('.m_new5').hide()
        $('.m_new1').show()
      }else if(opticon == 'm_new2'){
        $('.m_new1').hide()
        $('.m_new3').hide()
        $('.m_new4').hide()
        $('.m_new5').hide()
        $('.m_new2').show()
      }else if(opticon == 'm_new3'){
        $('.m_new1').hide()
        $('.m_new2').hide()
        $('.m_new4').hide()
        $('.m_new5').hide()
        $('.m_new3').show()
      }else if(opticon == 'm_new4'){
        $('.m_new1').hide()
        $('.m_new2').hide()
        $('.m_new3').hide()
        $('.m_new5').hide()
        $('.m_new4').show()
      }else if(opticon == 'm_new5'){
        $('.m_new1').hide()
        $('.m_new2').hide()
        $('.m_new3').hide()
        $('.m_new4').hide()
        $('.m_new5').show()
      }
    })
  })

  $(document).ready(function(){
    $(".mo_gnb_list li dl dt").click(function(){
      $(this).addClass("ac");
      $(this).siblings().removeClass("ac");
    })
  });


  $(document).ready(function(){
    $(".M_hbg_btn").click(function(){
      $(".mob_side").show()
    });

    $(".close_btn").click(function(){
      $(".mob_side").hide()
    });
  });


  //
  $("#mo_gnb > li").click(function(){
    $(this).find('dd').toggleClass('at');
  });