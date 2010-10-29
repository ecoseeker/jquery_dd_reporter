$(document).ready(function() {
  // Handler for .ready() called.
  $(window).resize(function(){
    $('#dim_w_width').val($(window).width());   // returns width of browser viewport
    $('#dim_w_height').val($(window).height());   // returns width of browser viewport
  
    $('#dim_d_width').val($(document).width()); // returns width of HTML document
    $('#dim_d_height').val($(document).height()); // returns width of HTML document
  });
  
  var link_title = 'Hide values';
  $('#dim_checker a').click(function() {
    if (link_title === 'Show values') {
      link_title = 'Hide values';
    } else {
      link_title = 'Show values';
    }  
    $('#dim_checker a').html(link_title);
    
    $('#dim_info').toggle(function() {
      // Animation complete.
    });
  });
});