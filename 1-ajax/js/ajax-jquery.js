'use strict';

$(function(){
   
//    $.ajax({
//       url:
//        'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
//        dataType: 'json',
//        success: function(resultJSON){
//            console.log(resultJSON);
//        },
//        error: function(msg){
//            console.log(msg);
//        }
//    });
    
    $('#baton').click(function(){
    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
        console.log(data);
        
                $('body').append('<p>Nazwa użytkownika to: ' + data.userName + '</p>');
                $('body').append('<p>Id użytkownika to: ' + data.userId + '</p>');
                $('body').append('<p>Strona użytkownika to: <a href=http://' + data.userURL + '>' + data.userURL + '<a/></p>');
    });
    });
    
    
});