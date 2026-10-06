$(function () {
  $('.op').on('click', function () {
    var a = parseFloat($('#num1').val());
    var b = parseFloat($('#num2').val());
    var op = $(this).data('op');
    var res;
    if (isNaN(a) || isNaN(b)) {
      $('#result').val('Dữ liệu không hợp lệ');
      return;
    }
    switch (op) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/':
        if (b === 0) { $('#result').val('Không chia được cho 0'); return; }
        res = a / b; break;
      case '^': res = Math.pow(a, b); break;
    }
    $('#result').val(res);
  });
});
