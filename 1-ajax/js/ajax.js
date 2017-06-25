'use strict';

function pobierzDane(){
    var httpReq = new XMLHttpRequest();
    
    httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true);
    
    httpReq.onreadystatechange = function () {
        
        
        
        if (httpReq.readyState == 4){
            
            
            if (httpReq.status >= 200 && httpReq.status <300 || httpReq.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpReq.status =="undefined"){
                
                
                var returnData = JSON.parse(httpReq.responseText);
                
                console.log(returnData);
                
                var userName = document.createElement('p');
                userName.innerHTML = "Nazwa użytkownika to: " + returnData.userName;
                document.body.appendChild(userName);
                
                var userId = document.createElement('p');
                userId.innerHTML = "Id użytkownika to: " + returnData.userId;
                document.body.appendChild(userId);
                
                var userEm = document.createElement('p');
                userEm.innerHTML = "Email użytkownika to: <a href='http://" + returnData.userURL + "'>" + returnData.userURL + "</a>";
                document.body.appendChild(userEm);
                
                
                 console.log(userName);                                   
              
                
             httpReq = null;
            }
           
        }
        
    
    }
    
    httpReq.send();
}
