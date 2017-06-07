
//$(window).scroll(function(){

        $(".side-menu li").click(function(){
                $(this).addClass("active");
                if($(this).has("ul")){
                        $(this).children("ul").show("slow");
                        $(".side-menu li ul li").click(function(){
                                $(this).addClass("active").siblings().removeClass("active");
                        })
                }
                $(this).siblings().removeClass("active");
                $(this).siblings().children("ul").hide("slow");
        })

        var scrollTop = $(window).scrollTop();

        if(scrollTop > 102 ){
                $(".side-menu").css("position","fixed");
        }
        else{
                $(".side-menu").css("position","relative");
        }
        if(scrollTop>400){
                $(".scroll-top-btn").show();
                $(".scroll-top-btn").click(function(e){
                        e.preventDefault();
                        $("html,body").animate({scrollTop:0},800)
                })
        }
        else{
                $(".scroll-top-btn").hide();
        }

//})


