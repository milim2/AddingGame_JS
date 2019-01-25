
// check off specific todos by clicking
//$("li").click(function(){
    // if li is gray
    // turn it black
    // console.log($(this).css("color"));
    // if($(this).css("color") === "rgb(128, 128, 128)") {

    //     $(this).css ({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    //     console.log("It is currently gray !");
    // }

    // else
    // turn it gray

    // $(this).css({
    //     color: "grey",
    //     textDecoration: "line-through"
    // });
    //$(this).toggleClass("completed");
//});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

