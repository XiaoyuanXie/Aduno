/**
 * util.js
 * Aduno project (http://aduno.meteor.com)
 * @author Braden Simpson (@bradensimpson)
 * 
 * Utility methods.
 */

// returns a jQuery object suitable for setting scrollTop to
// scroll the page, either directly for via animate()
var scroller = function() {
  return $("html, body").stop();
};

// Very hacky way to get the login callback..
// Eventually use 
//function loginCallback() {
//  workflow && workflow.loggedIn();
//}

function scrollto(selector)
{
  scroller().animate({
        scrollTop: $(selector).offset().top
    }, 500, 'swing');  
}