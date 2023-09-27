import $ from 'jquery';

const Main = () => {
  // click to scroll
  $(document).ready(function () {
    $('.mainMenu li').click(function (e) {
      // remove all other's active class
      $('.mainMenu li').removeClass('active');
      $(this).addClass('active');
    });
  });

  // click to scroll
  $(document).ready(function () {
    $('.mainMenu li a').click(function (e) {
      var targetHref = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(targetHref).offset().top - 90,
        },
        1000
      );
      e.preventDefault();
    });
  });

  // hambager menu
  $(document).ready(function () {
    $('.menuBtn').click(function (e) {
      $('.mainMenu').toggleClass('act');
      $(this).toggleClass('act');
      e.preventDefault();
    });
  });

  // hambager menu close
  $(document).ready(function () {
    $('.nav-menu li a').click(function (e) {
      $('.mainMenu').toggleClass('act');
      $('.menuBtn').toggleClass('act');
      e.preventDefault();
    });
  });

  // change navbar color on scroll
  $(function () {
    $(document).scroll(function () {
      var $nav = $('.navbur');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  // toggle light and dark theme
  $(window).on('load', function () {
    $('#theme-button2').on('click', e => {
      $('#toggle').toggleClass('selected');
      $('body').toggleClass('light');
      e.preventDefault();
    });
  });

  return <></>;
};

export default Main;
