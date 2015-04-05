(function($) {

  skel.init({
    reset: 'full',
    breakpoints: {
      global: { href: 'css/style.css', containers: '60em', grid: { gutters: ['2em', 0] } },
      large: { media: '(max-width: 9999px)', href: 'css/style-large.css', containers: '90%', grid: { gutters: ['1.5em', 0] } },
    }
  });

  $(function() {

    var $window = $(window),
      $body = $('body');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 250);
      });
  });

})(jQuery);
