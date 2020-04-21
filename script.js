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
