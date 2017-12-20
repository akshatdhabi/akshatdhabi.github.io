//if clicking on start reset button?
    //Check if we are playing
        //reload page
    //if not playing 
        //set score0
        //start game
        //show countdownbox
        //start reducing time bt 1s
            //check if timeleft
                //yes reduce time
                //no gameover
            //change button to reset
        //generate new ques and ans

    var  playing ='0' ;
    var t;
    var buttonCounter = [0,0,0,0];
    var score=0;
    var x=0;
    var y =0;
    var z = x*y;
    function startReset(){
        if (playing == 0)
            {
               score =0;
               t=60;
               document.getElementById("gameOver").style.display="none";
               document.getElementById("startreset").innerHTML="Reset";
               playing=1;
               scoreValue.innerHTML=score; 
               startGame();
               document.getElementById("time").style.visibility ="visible";
               var time = setInterval(function() { t--;document.getElementById("timevalue").innerHTML=t; 
                if(t==0){
                    clearInterval(time);
                    document.getElementById("gameOver").innerHTML="<p>Game over!</p> <br/ >     <p>Your Score is</p>" +score;
                    document.getElementById("gameOver").style.display="block";
                    document.getElementById("startreset").innerHTML="Start Again";
                    playing=0;
                    
                    
                    
                }} ,1000 );
                
                generateQuestion();
                
                
            }
            
        else{
            document.location.reload();
        }
    function startGame(){
        
    }
    }
    
    function generateQuestion(){
                    
                    
                    x= Math.floor(Math.random(x)*10+1);
                    y= Math.floor(Math.random(y)*10+1);
                    document.getElementById("question").innerHTML=x + "x" + y;
                    z = x*y;
                    buttonCounter = [z];
                    var randomPosition = [Math.floor(Math.random(x)*4+1)] ; 
                    document.getElementById("box"+randomPosition).innerHTML=z;
                    var random;
                    for(i=1; i<5; i++)
                       {
                          
                           if(i==randomPosition){
                               
                               window.alert("hi");
                                   
                           }
                           else{
                               var wrongAnswer;
                               do{
                                    wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
                                    
                               }while(buttonCounter.indexOf(wrongAnswer)>-1)
                                        document.getElementById("box"+i).innerHTML = wrongAnswer;
                                                    buttonCounter.push(wrongAnswer);

                               
                           }
                           
                           
                       }
                            
                    }
                  

       

    


//answerbox
//if we are playing
    //correct ansewer       
        //increase score +1 
        //correct box 1s
        //generate QnA
    //wrong ans
        //tryagain box

document.getElementById("box1").onclick= function(){
    
    if(playing==1)
        {
             if(buttonCounter[0]!==0)
             {
                   document.getElementById("scoreValue").innerHTML= score+=1;
             generateQuestion();
            document.getElementById("correct").style.display="block";
            setTimeout(function(){document.getElementById("correct").style.display="none"},1000);
            
               }
            else{
                document.getElementById("wrong").style.display="block";
        setTimeout(function(){document.getElementById("wrong").style.display="none"},1000);
            }
             
        }
    else{
        
        window.alert("Please start game first!");
    }
    
}
    
    
//button2
document.getElementById("box2").onclick= function(){
    
    if(playing==1)
        {
             if(buttonCounter[1]!==0)
             {
             document.getElementById("scoreValue").innerHTML= score+=1;
             generateQuestion();
            document.getElementById("correct").style.display="block";
            setTimeout(function(){document.getElementById("correct").style.display="none"},1000);
            
               }
            else{
                document.getElementById("wrong").style.display="block";
        setTimeout(function(){document.getElementById("wrong").style.display="none"},1000);
            }
             
        }
    else{
        
        window.alert("Please start game first!");
        
    }
    
}
    
//button3
document.getElementById("box3").onclick= function(){
    
    if(playing==1)
        {
             if(buttonCounter[2]!==0)
             {
            document.getElementById("scoreValue").innerHTML= score+=1;
             generateQuestion();
            document.getElementById("correct").style.display="block";
            setTimeout(function(){document.getElementById("correct").style.display="none"},1000);
            
               }
            else{
                document.getElementById("wrong").style.display="block";
        setTimeout(function(){document.getElementById("wrong").style.display="none"},1000);
            }
        }
    else{
        
        window.alert("Please start game first!");
    }
    
}

//button4
document.getElementById("box4").onclick= function(){
    
    if(playing==1)
        {
             if(buttonCounter[3]!==0)
             {
                   document.getElementById("scoreValue").innerHTML= score+=1;
             generateQuestion();
            document.getElementById("correct").style.display="block";
            setTimeout(function(){document.getElementById("correct").style.display="none"},1000);
            
               }
            else{
                document.getElementById("wrong").style.display="block";
        setTimeout(function(){document.getElementById("wrong").style.display="none"},1000);
            }
             
        }
    else{
        
        window.alert("Please start game first!");
    }
    
}
    
        
             
                
              
        
    

