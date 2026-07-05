$(document).ready(function () {
  $(".scroll-link").click(function (e) {
    e.preventDefault();

    let idHref = $(this).attr("href");
    let positionFromTop = $(idHref).offset().top - 70;

    $("body, html").animate({scrollTop: positionFromTop}, 600);
  });
});
