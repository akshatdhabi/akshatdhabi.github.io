var randomNum;
var lives;
var playCounter=false;

document.getElementById("startReset").onclick=function(){
    if(playCounter==false)
        {
            lives=10;
            playCounter=true;
            generateRandomNumber();
            document.getElementById("displayScreen").innerHTML="Lets begin!";
            document.getElementById("displayCard").textContent="Lives left : " +lives;
            document.getElementById("userNum").value="";
            document.getElementById("startReset").innerHTML="Reset Game";
        }
    else{
        document.getElementById("userNum").value="";
        document.location.reload();
    }

}

document.getElementById("submitNum").onclick = function(){
    if(playCounter==true)
        {
            if(lives>=0)
                {
                    var x=document.getElementById("userNum").value;
//                    window.alert(x);
                     if(x>randomNum)
                         {
                             document.getElementById("userNum").value="";
                             document.getElementById("displayScreen").innerHTML="Go down..";
                             lives-=1;
                             document.getElementById("displayCard").textContent="Lives left : " +lives;
                             
                             
                         }
                    else if(x<randomNum)
                         {
                             document.getElementById("userNum").value="";
                             document.getElementById("displayScreen").innerHTML="Go up..";
                             lives-=1;
                             document.getElementById("displayCard").textContent="Lives left : " +lives;
                             
                             
                         }
                    else{
                             
                             document.getElementById("userNum").value="";
                             document.getElementById("displayScreen").innerHTML="Correct! You win!" ;
                             lives=0;
                             document.getElementById("displayCard").textContent="Lives left : none ";
                             playCounter=false;
                             
                             
                         
                    }
                        
                      

                }
            else{
              
                document.getElementById("displayScreen").innerHTML="Sorry! You loose. No worries! You can always play again!" ;
                document.getElementById("userNum").value="";
                playCounter=false;
            }
            
        }
    else{
        document.getElementById("userNum").value="";
        document.getElementById("displayScreen").innerHTML="Please Start the game first.";
        
    }
    
}

document.getElementById("userNum").onkeypress=function(e){
    
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('submitNum').click();
        return false;
    }
    return true;
}















function generateRandomNumber()
{
    randomNum=Math.floor(Math.random()*50);
   
}


