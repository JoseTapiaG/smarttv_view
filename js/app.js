function loadContent(file){
    $("#content").fadeOut("fast", function(){
        $("#content").load(file);    
        $("#content").fadeIn("fast");    
    });
}