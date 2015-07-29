//<img class="img" src="http://placekitten.com/320/480" alt="" data-big="http://placekitten.com/1024/768" />
$(".img").each(function() {
  if (Modernizr.mq('only screen and (min-width: 1200px)')) {
    $(this).attr("src", $(this).attr("data-big"));
  }
});
