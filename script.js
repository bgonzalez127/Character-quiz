$("button").click(function(){
    var age = $("#age").val();
    var fun = $("#fun").val();
    
    if(fun === "Arts" ){
        $("#answer").text("Mabel");
        $("#mabel").show();
    }
    else if(fun === "Reading"){
        $("#answer").text("Dipper");
        $("#dipper").show();

    }
    else if(fun === "Exercising"){
        $("#answer").text("Finn");
        $("#finn").show();

    }
    else if(fun === "Sleeping"){
        $("#answer").text("Jake");
        $("#jake").show();

    }
    else{
        alert("Please enter the options provided");
    }
});