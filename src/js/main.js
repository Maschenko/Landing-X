import * as jQuery from 'bootstrap';

$('.nav-link a').on('click', function(){
  $('.nav-link').find('.active').removeClass('active');
  $(this).parent().addClass('active');
});


$('body').scrollspy({target: '.collapse'});
////
// const $win = $(window),
//   $fixed = $('.active'),
//   limit = 600;
//
// function tgl (state) {
//   $fixed.toggleClass('no-active', state);
// }
//
// $win.on('scroll', function () {
//   const top = $win.scrollTop();
//
//   if (top < limit) {
//     tgl(true);
//   } else {
//     tgl(false);
//   }
// });
jQuery(document).ready(function() {
  jQuery('no-active').addClass('hidden').viewportChecker({
    classToAdd: 'active-in visible',
    offset: 100
  });
});
////

///
const email = document.getElementById('mail');

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    email.setCustomValidity('I expect an e-mail, darling!');
  } else {
    email.setCustomValidity('frfr');
  }
});
///
