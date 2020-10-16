$(document).ready(function(){
    //save buttons
    $('.saveBtn').on('click', function(){
        //gets value

var textSpace = $(this).siblings('.description').val();
var time = $(this).parent().attr('id');

localStorage.setItem("textSpace", JSON.stringify(textSpace));
var storedTextSpace = localStorage.getItem('textSpace');
console.log('storedTextSpace:', JSON.parse(storedTextSpace));

localStorage.setItem("time", JSON.stringify(time));
var storedTime = localStorage.getItem("time");
console.log('time:', JSON.parse(storedTime));

    });

//var currentDay = $("#currentDay");
$("#currentDay").text(moment().format('MMMM Do YYYY'))

    function hours() {
        // get hours
        var currentTime = moment().hours();

    $('.time-block').each(function() {
        var hourBlocks = parseInt($(this).attr('id').split('-'[1]));
        if(hourBlocks < currentTime){
            $(this).addClass('past');
            }
        else if (hourBlocks === currentTime){
            $(this).removeClass('past');
            $(this).addClass('present');
            }

        else{
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        
    });
    hours();

    };
    setInterval(function() {
        //Your code h
        console.log("Oooo Yeaaa!")
      }, 1000); 


});