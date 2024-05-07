$(function () {

    //CONTROLE DO MENU MOBILE
   /* $('.mobile_action').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main_header_nav').animate({'left': '0px'}, 500);
        } else {
            $(this).removeClass('active');
            $('.main_header_nav').animate({'left': '-100%'}, 500);
        }
    }); */

    //HEADER
    $(window).scroll(function () {
          
          if($(this).scrollTop() > 0){
              
              if (!$('.main_header').hasClass('fixed')){
                   $('.main_header').stop().addClass('fixed');
              }
          
          }else{
          
              $('.main_header').removeClass('fixed');
          
          }
    });

    //Scroll Ancora
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop:$($.attr(this,'href')).offset().top
        }, 500);        
        return false;
    });


    //Magnific Popup
    $('.galeria-barber').magnificPopup({ 
      type: 'image',
      delegate: 'a',
      
      gallery:{enabled:true},
      callbacks: {
        
        buildControls: function() {
         
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
        
      }
    });

});

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
