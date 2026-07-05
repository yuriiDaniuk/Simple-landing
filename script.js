$(document).ready(function () {
  $(".scroll-link").click(function (e) {
    e.preventDefault();

    let idHref = $(this).attr("href");
    let positionFromTop = $(idHref).offset().top - 70;

    $("body, html").animate({scrollTop: positionFromTop}, 600);
  });

  $(".btn-open-modal").click(function(){
    $(".modal-overlay").fadeIn(300);
  })

  $(".btn-close-modal").click(function(){
    $(".modal-overlay").fadeOut(300);
  })

  $(".modal-overlay").click(function(e){
    if($(e.target).is(".modal-overlay")){
        $(this).fadeOut(300);
    }
  })
});
