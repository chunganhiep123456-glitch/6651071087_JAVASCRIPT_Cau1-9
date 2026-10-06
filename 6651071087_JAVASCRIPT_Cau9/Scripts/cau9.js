$(function () {
  function validDate(s) {
    var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s);   // mm/dd/yyyy hoặc mm-dd-yyyy
    if (!m) return false;
    var month = +m[1], day = +m[3], year = +m[4];
    if (month < 1 || month > 12) return false;
    if (year >= new Date().getFullYear()) return false;        // năm nhỏ hơn năm hiện tại
    var daysInMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= daysInMonth;
  }

  // đúng 1 '@'; trước @ có tối đa 1 dấu chấm; sau @ có ít nhất 1 dấu chấm
  function validEmail(s) {
    return /^[^@\s.]+(\.[^@\s.]+)?@[^@\s.]+(\.[^@\s.]+)+$/.test(s);
  }

  $('#btnFinish').on('click', function () {
    var errs = [];
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    var bday = $.trim($('#birthday').val());
    var zip = $.trim($('#zip').val());

    if (!name) errs.push('Name không được để trống.');
    if (!$('input[name="sex"]:checked').length) errs.push('Phải chọn Sex.');

    if (!email) errs.push('Email không được để trống.');
    else if (!validEmail(email)) errs.push('Email không hợp lệ (cần đúng 1 dấu @, tên account tối đa 1 dấu chấm, domain có ít nhất 1 dấu chấm).');

    if (!bday) errs.push('Birthday không được để trống.');
    else if (!validDate(bday)) errs.push('Birthday không hợp lệ (mm/dd/yyyy hoặc mm-dd-yyyy, tháng 1-12, năm nhỏ hơn năm hiện tại).');

    if (!$.trim($('#street').val())) errs.push('Street address không được để trống.');
    if (!$.trim($('#city').val())) errs.push('City không được để trống.');
    if (!$('#region').val()) errs.push('Phải chọn Region.');

    if (!zip) errs.push('ZIP code không được để trống.');
    else if (!/^\d{5}$/.test(zip)) errs.push('ZIP code phải có đúng 5 chữ số.');

    var $ul = $('#errors').empty();
    if (errs.length) {
      $ul.removeClass('ok');
      $.each(errs, function (_, e) { $ul.append($('<li>').text(e)); });
    } else {
      $ul.addClass('ok').append($('<li>').text('Đăng ký thành công! Dữ liệu hợp lệ.'));
    }
  });

  $('#btnClear').on('click', function () {
    $('#regForm')[0].reset();
    $('#errors').empty();
  });
});
