
for(var x in localStorage){
    $("ul").append(localStorage.getItem(x));
}

$("#todo-input").keypress(function(event){
   
    if(event.keyCode===13){
        var text=$("#todo-input").val();
        
        var s=new Date().getTime();
        $("#list").append("<li s='"+s+"'>"+$("#todo-input").val()+"</li>");
       
        localStorage.setItem(s, "<li s='"+s+"'>"+$("#todo-input").val()+"</li>");
        
        
        
        $("#todo-input").val("")
    }
    
});
$("#list").on("click", "li", function(){

    $(this).addClass("selected");
    
    
});

    $("#list").on("dblclick",".selected", function(){
       
        
       
        var rem= $(this).attr("s");
        $(this).remove();
        
        
        localStorage.removeItem(rem); 
        
    });
    
