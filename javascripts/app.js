$(document).ready(function(){$(document).foundation(),Socialite.load();var o=$("body article .sidebar"),a=$(".toc",o);a.length&&(a.find("h4").append('<a href="#top">&uArr;</a>'),a.find("ul#markdown-toc > li").each(function(o){var a=$(this),l=a.children("ul");if(l.length){var e=$('<a href="#" class="toggle"><span class="open">&dArr;</span><span class="close">&lArr;</span></a>');e.click(function(){return a.toggleClass("closed"),!1}),a.prepend(e),o>0&&a.addClass("closed")}}))}),$(window).load(function(){var o=($("body article .sidebar"),$("body article .content")),a=$("body article .sidebar-float");if(a.length){var l,e,t=!1,s=a.offset().top;$(window).bind("scroll",function(){e=o.outerHeight()+s-a.outerHeight()-100,$(this).scrollTop()>=e?(console.log("hide float sidebar"),t||(a.hide(),t=!0)):$(this).scrollTop()>=s?(t&&(t=!1,a.show()),l||(l=!0,a.addClass("float"))):l&&$(this).scrollTop()<=s&&l&&(l=!1,a.removeClass("float"))})}});