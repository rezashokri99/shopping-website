$(function(){

    // when screen scrolled adding class scroll to navbar
    $(window).scroll(function(){
        if( $(this).scrollTop() > 900 ){
            $('#navbar-menu').addClass('scroll');
        }else{
            $('#navbar-menu').removeClass('scroll');
        }
    })

    // when navbar opened adding class scroll to navbar
    $('#navbar-menu').on('show.bs.collapse', function () {
        $('#navbar-menu').addClass('scroll-m');
      })

    $('#navbar-menu').on('hidden.bs.collapse', function () {
        $('#navbar-menu').removeClass('scroll-m');
      })



})