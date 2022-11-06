$(document).ready(function () {

// Using moment to get todays date. It will be displayed like this: month, day, and year
let currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate);

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
