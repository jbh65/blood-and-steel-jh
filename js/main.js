$(function(){

  var mobileThreshold = 768;
  var isMobile = $(window).width() < mobileThreshold;

  if(isMobile) {
    return;
  } else {
    if ($('.factions-page').length) {
      $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left'
      });
    }
  }
});
