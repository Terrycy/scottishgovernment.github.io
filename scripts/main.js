/**
 * Created by z608165 on 03/10/2014.
 */
$(function(){
    var current = location.pathname;
    $('.site-header nav li a.page-link').each(function(){
        var $this = $(this),
            href = $this.attr('href');

        // if the current path is like this link, make it active
        if (current.indexOf(href) >= 0){
            $this.addClass('active');
        }
    })
});
