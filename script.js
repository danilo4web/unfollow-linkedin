// Go to here https://www.linkedin.com/feed/following/?filterType=connection 
// open the chrome dev tools console 
// paste the following 
// go grab a cup of tea
// get rid of all life coach from linkedin 

var buttons = $('button'), interval = setInterval(function() {
   var btn = $('.is-following');
   console.log('Clicking:', btn);
   btn.click();
   if (buttons.length === 0) {
   clearInterval(interval);
   }
}, 1000);


function pageScroll() {
   window.scrollBy(0,100);
   scrolldelay = setTimeout(pageScroll,10);
}

pageScroll();
