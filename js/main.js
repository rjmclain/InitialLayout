// JavaScript source code
// JavaScript source code

// Sticky Top
var navDistance = $('.stick-top').offset().top;
function stickyTop() { 
    $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= navDistance) {
            // Your div has reached the top
            $('.stick-top').addClass('stuck');
        }
        else {
            $('.stick-top').removeClass('stuck');
        }
    });
}

function navChange() {
    $('.nav-item').click(function () {
        // click nav-item
        // find selected item
        $('.nav-item').removeClass('selected');
        $(this).addClass('selected');
        // find left border of item
        var itemPosition = $(this).position().left;
        // get width of selected item
        var itemWidth = $(this).width();
        // add half the width
        itemWidth = itemWidth / 2;
        var newLinePosition = itemPosition + itemWidth + 25; //25 to compensate for padding on sides
        // make left position of underline that value
        $('.nav-underline').css('left', newLinePosition);

        //scroll animation
        $("html, body").animate({ scrollTop: navDistance }, "slow");

        //change content
        $('.content-wrapper').removeClass('.selected');
        //find what's selected and match class to it
        var categorySelected = $(this).attr('id');
        categorySelected = "." + categorySelected + "-content";

        //change selected content
        $('.content-wrapper').removeClass('selected');
        $(categorySelected).addClass('selected');
    })
}

stickyTop();
navChange();
