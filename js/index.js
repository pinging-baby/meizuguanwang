var time = setInterval(move, 2000);
var index = 0;
$(".banner .num li").mousemove(function() {
    $(".banner-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(this).addClass("current").siblings().removeClass("current");
    index = $(this).index();
});
function move() {
    let outIndex = index;
    index++;
    if (index ==5) {
        index = 0;
    }
    $(".banner .num li").eq(outIndex).addClass("current").siblings().removeClass("current");
    $(".banner-img li").eq(outIndex).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    
};
$(".banner").hover(function() {
        clearInterval(time);
    },
    function() {
        time = setInterval(move, 2000);
    });