$("#todo-input").keypress(function(event){
   
    if(event.keyCode===13){
        var text=$("#todo-input").val();
        
    
        $("#list").append('<li>'+text+'</li>');
        $("#todo-input").val("");
    }
    
});
$("#list").on("click", "li", function(){

    $("li").addClass("selected");
    
    
});

    $("#list").on("dblclick",".selected", function(){
        $(".selected").remove();
    });
    
