$(document).ready(function () {

// Using moment to get todays date. It will be displayed like this: month, day, and year
let currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate);

console.log(currentDate);
// satisfies the time criteria by having 9am-5pm displayed once its called for
businessTime = [
    "9 AM",
    "10 AM",
    "11 AM", 
    "12 PM", 
    "1 PM", 
    "2 PM", 
    "3 PM", 
    "4 PM", 
    "5 PM"];

// Needed to add a for loop to run through the businessTime 
for (let i = 0; i < businessTime.length; i++) {
    let rowElements = $("<div>").addClass("row time");
//Added .split so the number could be compared to other numbers
let hoursArray = businessTime[i].split(" ");
//the hour is the 1st thing in the Array, the 2nd one is AM/PM which we dont want right now when comparing numbers
let hour = hoursArray[0];
let newestTime = hour;

// Creates rows with the time, input and save button
let rowTime = $("<div>").addClass("col-2 hour time-block ").data("value", newestTime);
let columnInput = $("<textarea>").addClass("col-8 columnInput columnInput" + newestTime);
let saveButton = $("<button>").addClass("col-2 saveBtn i:hover");
saveButton.html('<i class="fa fa-save"></i>');

// Adds all of it to the div conatiner section in the html file
$("div.container").append(rowElements);
rowElements.append(rowTime, columnInput, saveButton);

// adds correct times from my businessTime to the screen
rowTime.text(businessTime[i]);
};

//created a function to confitional format the rows color based off what time it is.
function rowColor() {
    $(".time-block").each(function () {
        let columnElement = $(this).siblings(".columnInput");
        let columnHour = $(this).data("value");
        //Used an if statement so the correct color could be added depending on the time
        if (columnHour > moment().hour()) {
            columnElement.addClass("future");
        } else if (columnHour < moment().hour()) {
            columnElement.addClass("past");
        } else {
            columnElement.addClass("present");
        }
    });
    }
// Called the function
rowColor();

// Created an event listener on the save button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();//This is so it doesnt automatically pass by without showing the user the texts
    //The objective element will look at what the user inputs and will save it to the local storage once its saved
    let objectiveElement = [];
    $(".columnInput").each(function (currentIndex, currentEl) {
    objectiveElement[currentIndex] = $(currentEl).val().trim();
    });
    localStorage.setItem("planner", JSON.stringify(objectiveElement));
});



});

