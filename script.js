var $inner = $('.inner'),
     $spin = $('#spin'),
     $reset = $('#reset'),
     $data = $('.data'),
     $mask = $('.mask'),
     maskDefault = '',
     timer = 9000;

var red = [9,3,5,7,1];

$reset.hide();

$mask.text(maskDefault);





$spin.on('click', function(e) {
 



  var rvalues = [];
  var percentages = [9, 30, 30, 30, 30, 30, 30, 9, 30, 30];

  for (var i = 0; i <= 9; i++) {
    var count = Math.round((percentages[i] / 100) * 1000);
    for (var j = 0; j < count; j++) {
      rvalues.push(i);
    }
  }

  var randomNumber = rvalues[Math.floor(Math.random() * rvalues.length)];
  var color = null;

  $inner.attr('data-spinto', randomNumber).find('li:nth-child('+ randomNumber +') input').prop('checked','checked');

  $(this).hide();
  $reset.addClass('disabled').prop('disabled','disabled').show();

  $('.placeholder').remove();

  setTimeout(function() {
    $mask.text('');
  }, timer/2);

  setTimeout(function() {
    $mask.text(maskDefault);
  }, timer+500);

  setTimeout(function() {
    $reset.removeClass('disabled').prop('disabled', '');
    
    if ($.inArray(randomNumber, red) !== -1) {
      color = '#ff000000';
    }
    if (randomNumber == 0) {
      color = 'url("Hop Fruittea.png")';
    }
    if (randomNumber == 1) {
      color = 'url("HK stick 1.png")';
    }
    if (randomNumber == 2) {
      color = 'url("MC stick 1.png")';
    }
    if (randomNumber == 3) {
      color = 'url("Stick Dua Hau.png")';
    }
    if (randomNumber == 4) {
      color = 'url("Stick Mang Cau.png")';
    }
    if (randomNumber == 5) {
      color = 'url("Stick Dua Luoi.png")';
    }
    if (randomNumber == 6) {
      color = 'url("Stick Oi Hong.png")';
    }
    if (randomNumber == 7) {
      color = 'url("Hop Milktea.png")';
    }
    if (randomNumber == 8) {
      color = 'url("TT stick 1.png")';
    }
    if (randomNumber == 9) {
      color = 'url("PM stick 1.png")';
    }

    $('.result-number').text(randomNumber);
    $('.result-color').text(color);
    $('.result').css({'background-image': ''+color+''});
    $data.addClass('reveal');
    $inner.addClass('rest');
      $reset.addClass('disabled').prop('disabled','disabled').show();
    $thisResult = '<li class="previous-result color-'+ color +'"><span class="previous-number">'+ randomNumber +'</span><span class="previous-color">'+ color +'</span></li>';
     
    $('.previous-list').prepend($thisResult);
  }, timer);


 setTimeout(function() {
    $reset.trigger('click');
  }, 20000);



});


$reset.on('click', function() {
  // remove the spinto data attr so the ball 'resets'
  $inner.attr('data-spinto','').removeClass('rest');
  $(this).hide();
  $spin.show();

  $data.removeClass('reveal');

  setTimeout(function() {
    $spin.focus(); // Tự động đặt trỏ chuột vào nút spin
  }, 0);










});

