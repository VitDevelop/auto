// (function($){
//   $(function(){

//    // The rest above this is hidden
//    $('.slider').slider({full_width: true,
//    						indicators: false});

//    $('.modal-trigger').leanModal();
//    $('.carousel').carousel();
//   }); // end of document ready

// })(jQuery); 

$(document).ready(function(){
	$('.slider').slider({full_width: true,
   						indicators: false});

   $('.modal-trigger').leanModal();
      $('.carousel').carousel({dist: -200});
    });
