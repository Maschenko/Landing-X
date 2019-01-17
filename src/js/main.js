$(".nav-link a").on("click", function(){
  $(".nav-link").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});


$('body').scrollspy({target: ".collapse"})

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
