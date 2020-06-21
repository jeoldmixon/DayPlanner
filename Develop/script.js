$(function() {
    console.log("ready!");

    //load previously saved items

    var PreviousTasks = [];
    var loadPreviousTasks = function() {
        $("#hour-9").find("textarea").val(localStorage.getItem("hour-9"))
        $("#hour-10").find("textarea").val(localStorage.getItem("hour-10"))
        $("#hour-11").find("textarea").val(localStorage.getItem("hour-11"))
        $("#hour-12").find("textarea").val(localStorage.getItem("hour-12"))
        $("#hour-13").find("textarea").val(localStorage.getItem("hour-13"))
        $("#hour-14").find("textarea").val(localStorage.getItem("hour-14"))
        $("#hour-15").find("textarea").val(localStorage.getItem("hour-15"))
        $("#hour-16").find("textarea").val(localStorage.getItem("hour-16"))
        $("#hour-17").find("textarea").val(localStorage.getItem("hour-17"))


    }

    var displayDay = moment().format("dddd, MMMM Do, YYYY");
    var currentHour = new Date().getHours();

    function setDate() {
        $("#displayDay").text(displayDay);

    }
    loadPreviousTasks();
    setDate();

    //save button
    $(".saveBtn").on("click", function() {
        var saveButton = $(this)[0];
        console.log(saveButton);

        var value = $(this)
            .siblings('textarea')
            .val();

        var time = $(this)
            .parent()
            .attr("id");

        localStorage.setItem(time, value)
    });

    //Update time blocks color
    var updateColor = function() {
        $('.time-block').each(function(index, hour) {
            var lineHour = parseInt(hour.id.split('-')[1])
            console.log(lineHour)
            if (lineHour < currentHour) {
                $(hour).addClass('past')
            } else if (lineHour === currentHour) {
                $(hour).removeClass('past')
                $(hour).addClass('present')
            } else {
                $(hour).removeClass('past')
                $(hour).removeClass('present')
                $(hour).addClass('future')
            }
        })
    }
    updateColor();

});