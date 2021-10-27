/*메인 슬라이더*/
$(function(){
    var imgNum = 0;

    setInterval(function(){
    imgNum++;   
    if(imgNum > 2) imgNum = 0; 
     var x = -(imgNum * 100) + '%';

     $('.slider .sliders')
     .css('margin-left', x)
    
     },3000)
    
})

$(function(){
    $('.header-second-nav > li').hover(
        function(){
            $(this).find('.header-second-nav-depth')
            .stop()
            .slideDown();
        },
        function(){
            $(this).find('.header-second-nav-depth')
            .stop()
            .slideUp();
        }
    );
})

