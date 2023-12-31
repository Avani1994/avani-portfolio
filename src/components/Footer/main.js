import $ from 'jquery';

const Main = () => {
  (function ($) {
    $(document).ready(function () {
      //Scroll back to top

      var progressPath = document.querySelector('#scroll-to-top');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        'stroke-dashoffset 10ms linear';
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).on('scroll', updateProgress);
      var offset = 50;
      var duration = 550;
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
          $('.progress-wrap').addClass('active-progress');
        } else {
          $('.progress-wrap').removeClass('active-progress');
        }
      });
      $('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
      });
    });
  })($);
  return <></>;
};

export default Main;
