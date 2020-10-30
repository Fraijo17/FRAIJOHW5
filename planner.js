$(document).ready(function(){
    //save buttons
    $("#prospects_form").submit(function(e) {
        e.preventDefault();
    });

    $('.saveBtn').on('click', function(){
        //gets value

var textSpace = $(this).siblings('.description').val();
var time = $(this).parent().attr('id');

var newEvent = localStorage.getItem('sixteen');

 localStorage.setItem("textSpace", JSON.stringify(textSpace));
 var storedTextSpace = localStorage.getItem('textSpace');
 console.log('storedTextSpace:', JSON.parse(storedTextSpace));

 localStorage.setItem(time, JSON.stringify(textSpace));
 var storedTime = localStorage.getItem(time);
 console.log('time:', JSON.parse(storedTime));

    });

var currentDay = $("#currentDay");
$("#currentDay").text(moment().format('MMMM Do YYYY'))

    function hours() {
        // get hours
        var currentTime = moment().hours();

    $('.row time-block').each(function() {
        var hourBlocks = parseInt($(this).attr('id').split('-'[1]));
        if(hourBlocks < currentTime){
            $(this).addClass('.past');
            }
        else if (hourBlocks === currentTime){
            $(this).removeClass('.past');
            $(this).addClass('.present');
            }

        else{
            $(this).removeClass('.past');
            $(this).removeClass('.present');
            $(this).addClass('.future');
        }
       

        });
    
    Date.hours();

    };
    setInterval(function() {
        //Your code 
        console.log("Oooo Yeaaa!")
      }, 1000); 


});