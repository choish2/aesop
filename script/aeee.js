
$('.section6 .wrap .img_box li:nth-child(4)').mouseover(function() {
    $(this).find(':before').fadeIn(150)
    return false;   
})

$('.h2 span').mouseover(function() {
    $(this).children().css('color' , '#000')
})
$('.h2 span').mouseleave(function() {
    $(this).children().css('color' , '#7e7e7e')
})

$('.mini a').mouseover(function() {
    $(this).css('color' , '#000')
})
$('.mini a').mouseleave(function() {
    $(this).css('color' , '#7e7e7e')
})
