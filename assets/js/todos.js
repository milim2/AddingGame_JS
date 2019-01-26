
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
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // grabbing a new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

