$(function () {
  $('#form1').on('submit', function (e) {
    e.preventDefault();
    var fname = $.trim($('input[name="fname"]').val());
    var lname = $.trim($('input[name="lname"]').val());
    var full = fname + ' ' + lname;
    $('#result').text('Họ và tên: ' + full);
    alert(full);
  });
});
