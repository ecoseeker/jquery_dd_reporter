/*----------------------------------
 jQuery Document Dimensions Reporter
 Version: 0.1
 Developer: Oliver Bettany
 Date: October 2010
-----------------------------------*/

  function twist_dd_reporter() {
    var window = this,
        $ = window.jQuery,
        win = $(window),
        doc = $(document),
        dim_ww = $('#dim_w_width'),
        dim_wh = $('#dim_w_height'),
        dim_dw = $('#dim_d_width'),
        dim_dh = $('#dim_d_height');
    
    $(window).resize(function(){
      dim_ww.val(win.width());   // returns width of browser viewport
      dim_wh.val(win.height());   // returns width of browser viewport

      dim_dw.val(doc.width()); // returns width of HTML document
      dim_dh.val(doc.height()); // returns width of HTML document
    });

    var link_title = 'Hide values';
    $('#dim_checker a').click(function() {
      if (link_title === 'Show values') {
        link_title = 'Hide values';
      } else {
        link_title = 'Show values';
      }  
      $('#dim_checker a').html(link_title);

      $('#dim_info').toggle(function() {});
    });
  }