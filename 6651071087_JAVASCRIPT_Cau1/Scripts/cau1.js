$(function () {
  $('#jsstyle').on('click', function () {
    $('#text').css({
      fontSize: $('#fontSize').val() + 'px',
      fontFamily: $('#fontFamily').val(),
      color: $('#color').val()
    });
  });
});
