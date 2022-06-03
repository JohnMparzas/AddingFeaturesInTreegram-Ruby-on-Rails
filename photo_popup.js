var PhotoPopup = {
  setup: function() {
    // add hidden 'div' to end of page to display popup:
    var popupDiv = $('<div id="photoInfo"></div>');
    popupDiv.hide().appendTo($('body'));
    $(document).on('click', '#photos a', PhotoPopup.getPhotoCollection);
  }
  ,getPhotoCollection: function() {
    $.ajax({type: 'GET',
            url: $(this).attr('href'),
            timeout: 5000,
            success: PhotoPopup.showPhotoCllection,
            error: function(xhrObj, textStatus, exception) { alert('Error!'); }
            // 'success' and 'error' functions will be passed 3 args
           });
    return(false);
  }
  ,showPhotoCollection: function(data, requestStatus, xhrObject) {
    // center a floater 1/2 as wide and 1/4 as tall as screen
    var oneFourth = Math.ceil($(window).width() / 4);
    $('#comment').
      css({'left': 2*oneFourth,  'width': 2*oneFourth, 'top': 250}).
      html(data).
      show();
    // make the Close link in the hidden element work
    $('#closeLink').click(PhotoPopup.hidePhotoCollection);
    return(false);  // prevent default link action
  }
  ,hidePhotoCollection: function() {
    $('#photoInfo').hide();
    return(false);
  }
};
$(PhotoPopup.setup);