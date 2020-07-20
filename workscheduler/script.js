(function($){
    $( document ).ready(function() {
        $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentTime").text(moment().format("LTS"));

    $(".btn").on("click", function() {
        var time = $(this).parent().attr("id");
        var textcontent = $(this).siblings(".description").val();
        localStorage.setItem(time, textcontent);
        console.log(time, textcontent);
    
    });

    function hourUpdater() {

        var currenthour = moment().hours();

        $(".time-block").each(function() {
            var blockhour = parseInt($(this).attr("id").split("-")[1]);

            if (blockhour < currenthour) {
                $(this).addClass("past");
            }
            else if (blockhour === currenthour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourUpdater();

    var interval = setInterval(hourUpdater, 15000);

    
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    });
})(jQuery)

