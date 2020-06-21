var displayDay = moment().format("dddd,MMMM Do");

function setDate() {
    $("#displayDay").text(displayDay);

}
setDate();

// var value = $(this)
//     .siblings('.description')
//     .val();

// for (let i = 9; i <= 17; i++) {
//     $
// }

// for loop
// if time is less than current apply past CSS
//else if time is === to current  (remove past)
//add current
//else  add future
function compareTime()

var currentHour = moment().hour(); // Number
console.log(currentHour);
$("").addClass("past");
//if hour < current then apply .past