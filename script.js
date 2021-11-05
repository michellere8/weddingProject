
/*------------------------------jQuery -------------------------------------------*/

$(document).ready(function(){


    $(".checkbtn").click(function(){
        $("#nav").toggle();
    });

    /*----------forms---------*/
    $(".bg-modal").hide();

    $(".bg-modal2").hide();

    $("#subForm").hide()

    $("#sup").click(function(){
        $("#Su").show()
    });

    $("#lin").click(function(){
        $("#Li").show()
    });

    $(".cancelbtn").click(function(){
        $(".bg-modal").hide()
        $(".bg-modal2").hide()
    });

    // -----------------contact button  from event planners 
    $(".ebtn").click(function(){
        $(".bg-modal2").show()
        $("#subForm").show()
        $("#subForm2").hide()
    });

    $(".submit").click(function(){
        $("#subForm").hide()
        $("#subForm2").show()
    });
    // -----------------contact button from rentals & decore
    $(".ebtn2").click(function(){
        $(".bg-modal2").show()
        $("#subForm").show()
        $("#subForm2").hide()
    });

    $(".btv").click(function(){
        $(".bg-modal2").show()
        $("#subForm").show()
        $("#subForm2").hide()
    });




    $("#phC1").click(function(){
        event.preventDefault();
        var name = $("#name").val()
            $("#ptx").html("Thank you" + " " + name +" "+ "for contacting us!");
    
        $("form").fadeOut(function(){
            $(".mtext").fadeIn()
        });
        
    });

   

    // $("#phC2").click(function(){
    //     event.preventDefault();
    //     var name = $("#name").val()
    //         $("#ptx").html("Thank you" + " " + name +" "+ "for contacting us!");
    
    //     $("form").fadeOut(function(){
    //         $(".mtext").fadeIn()
    //     });
        
    // });
    // $("#phC3").click(function(){
    //     event.preventDefault();
    //     var name = $("#name").val()
    //         $("#ptx").html("Thank you" + " " + name +" "+ "for contacting us!");
    
    //     $("form").fadeOut(function(){
    //         $(".mtext").fadeIn()
    //     });
        
    // });
    // $("#phC4").click(function(){
    //     event.preventDefault();
    //     var name = $("#name").val()
    //         $("#ptx").html("Thank you" + " " + name +" "+ "for contacting us!");
    
    //     $("form").fadeOut(function(){
    //         $(".mtext").fadeIn()
    //     });
        
    // });
    /*-------------login and log out --------------*/
    $("#myForm").submit(function(event){
        event.preventDefault();
        var textInput = $("#inText").val()
        $("#logId").html(textInput);
    
    });

    $(".signinbtn").click(function(){
        $("#Li").hide();
        $(".login").hide();
        $("#logId, #logout").show();
    })

    $("#logout").click(function(){
        $("#logId,#logout").hide();
        $(".login").show();
    })

    /*---Photo slide----*/

    $("#prev").click(function(){
        var currentimg = $(".active");
        var previmg = currentimg.prev();
        
        if(previmg.length){
            currentimg.removeClass("active").css("z-index","10");
            previmg.addClass("active").css("z-index", "-10")
        } else{
            previmg.addClass("active").css("z-index", "10")
        }

        // if(previmg.length == 0){
        //     $('img').last().fadeIn(300).addClass('active');
        // }
        
    })

    $("#next").click(function(){
        var currentimg = $(".active");
        var nextimg = currentimg.next();

        if(nextimg.length){
            currentimg.removeClass("active").css("z-index","-10");
            nextimg.addClass("active").css("z-index", "10");
        }
        // if(nextimg.length == 0){
        //     $('img').first().fadeIn(300).addClass('active');
        // }
    })

    
    /*--------rentals slider------------*/ 
    // $("#prev").click(function(){
    //     var currentimg = $(".rntD.active");
    //     var prevSlide = currentimg.prev();
        
    //     currentSlide.fadeOut(300).removeClass('active');
    //     prevSlide.fadeIn(300).addClass('active');

    //     if(prevSlide.length == 0){
    //         $('.rntD.active').first().fadeIn(300).addClass('active');
    //     }
        
    // })
    $("#next").click(function(){
        var currentSlide = $(".rntD.active");
        var nextSlide = currenSlide.next();

        currentSlide.fadeOut(300).removeClass('active');
        nextSlide.fadeIn(300).addClass('active');

        if(nextSlide.length == 0){
            $('.rntD.active').first().fadeIn(300).addClass('active');
        }
    })
    /*--------rentals slider1------------*/ 
    $("#prev1").click(function(){
        var currentimg = $(".show");
        var previmg = currentimg.prev();
        
        if(previmg.length){
            currentimg.removeClass("show").css("z-index","10");
            previmg.addClass("show").css("z-index", "-10")
        } else{
            previmg.addClass("show").css("z-index", "10")
        }

    })


    $("#next1").click(function(){
        var currentimg = $(".show");
        var nextimg = currentimg.next();

        if(nextimg.length){
            currentimg.removeClass("show").css("z-index","-10");
            nextimg.addClass("show").css("z-index", "10");
        }
    })

    /*--------rentals slider2------------*/ 
    $("#preBtn").click(function(){
        var currentimg = $(".act");
        var previmg = currentimg.prev();
        
        if(previmg.length){
            currentimg.removeClass("act").css("z-index","10");
            previmg.addClass("act").css("z-index", "-10")
        } else{
            previmg.addClass("act").css("z-index", "10")
        }
    })
    
    $("#follow").click(function(){
        var currentimg = $(".act");
        var nextimg = currentimg.next();

        if(nextimg.length){
            currentimg.removeClass("act").css("z-index","-10");
            nextimg.addClass("act").css("z-index", "10");
        }
    })


    /*--------tips and cuppons ------------*/
    $("#btnTip1").click(function(){
        $("#tips1").show();
        $("#tips2").hide();
    });

    $("#btnTip2").click(function(){
        $("#tips2").show();
        $("#tips1").hide();
    })
})


/*------------------------------ Angular ----------------------------------------------*/

var app = angular.module('searchApp',[]);
app.controller('searchController',function($scope){
    $scope.price1= 1000; 
    $scope.price2= 4000;
    $scope.price3= 9000;

    $scope.searchBar = function(){
        $scope.filter = price; 
    }
})

var app = angular.module('appform',[]);
app.controller('appFormCtrl',function($scope){
    $scope.name= "sample first name";
    $scope.date= "sample first name";
    
})
    
/*------------------------------------------------------java------------------------------*/

function search_venue(){
    let input= document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x= document.getElementsByClassName('venue');

    for(i = 0; i< x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        } else{
            x[i].style.display="list-item";
        }
    }
}
