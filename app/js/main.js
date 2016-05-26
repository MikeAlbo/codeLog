// on load
$(document).ready(function(){
    
    // smooth scroll
    
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
    });
    
    // sticky nav
    var sectionOneHeight = $(window).height();
    

     $(window).on("scroll", function(){
            
       if($(this).scrollTop() > sectionOneHeight - 80){
          // alert(sectionOneHeight);
           $("#landingNav").addClass("navbar-fixed-top").css("top", "0");
           //$("body").css("background-color", "red");
           animateTitleBar();
           
       } else {
           $("#landingNav").removeClass("navbar-fixed-top").css("top", "70%");
       }
    
    // -- title bar animation -- //
    
    // in
    
    function animateTitleBar(){
        
        $(".navbar-brand").animate({
            opacity: 1
        }, 200);
        $("#navbarSignIn").animate({
            opacity: 1
        }, 200);
    }
 
    
    
     });
    
    
    function showLogin(){
        
        alert("works");
        $("#landingNav").animate({
            height: "50%"
        }, 500);
    }
   
    
});