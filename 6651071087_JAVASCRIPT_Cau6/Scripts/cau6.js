$(function () {
  $('#btnCount').on('click', function () {
    var items = $('#mySelect option').map(function () {
      return $(this).text();
    }).get();
    alert('Số mục: ' + items.length + '\nDanh sách: ' + items.join(', '));
  });
});
