var playerChoice;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var question = 0;
var images;
var count = 15;
var i = 0


var q1 = {
	question : '1. What is another word for lexicon?',
	possibleAnswers : ['Dictionary',
				 'Atlas',
				 'Map',
				 'Compass'],
};

var q2 = {
	question : "2. What is the world's longest river?",
	possibleAnswers : ['Yangtze  ',
				 'Mississippi  ',
				 'Amazon  ',
				 'Nile  '],
	
};

var q3 = {
	question : '3. In 2011, which country hosted a Formula 1 race for the first time?',
	possibleAnswers : ['India  ',
				 'Japan  ',
				 'Turkey  ',
				 'Spain  '],
	
};

var q4 = {
	question : '4. Which Shakespeare play features Shylock?',
	possibleAnswers : ['Romeo & Juliet',
				 'Hamlet',
				 'The Merchant of Venice',
				 'The Tempest'],
	
};

var q5 = {
	question : '5. What is allspice alternatively known as?',
	possibleAnswers : ['Herb',
				 'Black Pepper',
				 'Turmeric',
				 'Pimento'],
	
};

var q6 = {
	question : '6. What did the crocodile swallow in Peter Pan?',
	possibleAnswers : ['A Sword',
				 'An Alarm Clock',
				 'Another Character',
				 'A Cuckoo Bird'],
	
};

var q7 = {
	question : '7. How many squares are there on a chess board?',
	possibleAnswers : ['58',
				 '62',
				 '64',
				 '60'],
	
};

var q8 = {
	question : '8. What did Sir Christopher Cockerell invent?',
	possibleAnswers : ['Stovetop',
				 'Zamboni',
				 'The Fridge',
				 'Hovercraft'],
	
};

var q9 = {
	question : '9. What is the bluebird a symbol of?',
	possibleAnswers : ['Loneliness',
				 'Sadness',
				 'Good Luck',
				 'Happiness'],
	
};

var q10 = {
	question : '10. A flamboyance is a group of what animal?',
	possibleAnswers : ['Pigeons',
				 'Flamingos',
				 'Ocelots',
				 'Turtles'],
	
};
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



$(".page2").hide();


//animation for the second screen phase
$(".startGame").on("click", function(){
$("#startPage").hide(2000);
$("#triviaPage").show(2000);
$("#question").show(3000);
$("#timer").show(2500);
$("#answers").show(3500);
$("#table").show(4000);
});

//timer function button
$(".ready").on("click", function(){
$(".ready").hide(1000);

var counter=setInterval(timer, 1000); 

//timer function    
function timer() {
  count = count-1;
 
  //console.log(i); 
  //$(".timeBlock").animate({width: "-=2%"}, 1000);
  $("#quest").html("<h1>" + questionArray[i].question + "</h1>" );  
  $("#a").html("<h4> A. " + questionArray[i].possibleAnswers[0] + "</h4>" );  
  $("#b").html("<h4> B. " + questionArray[i].possibleAnswers[1] + "</h4>" );  
  $("#c").html("<h4> C. " + questionArray[i].possibleAnswers[2] + "</h4>" );  
  $("#d").html("<h4> D. " + questionArray[i].possibleAnswers[3] + "</h4>" );   
  
    if(question >= 10 && correctAnswer >= 7) {
        clearInterval(counter);
        alert("Congrats you have won!!!");
        return;
    }    
  
     if(question >= 10 && incorrectAnswer >= 4) {
        clearInterval(counter);
        alert("Sorry you have lost!!!");
        return;
    }    
    
     if(question >= 10 && unAnswer >= 4) {
        clearInterval(counter);
        alert("Sorry you have lost!!!");
        return;
    }    
    
    if(question >= 10 && incorrectAnswer + unAnswer >= 4) {
        clearInterval(counter);
        alert("Sorry you have lost!!!");
        return;
    }   
    
    if (count <= -1) {
        unAnswer++;
        question++;
        count = 15;
        clearInterval(counter);
        //console.log(unAnswer + "unanswered");
        //console.log(question + "question #");
        $("#unanswered").html("<h1>Unanswered = " + unAnswer + "</h1>");
    
    
       
    
 
     
    if (question < 10) {
        $( ".ready" ).trigger( "click" );
        //console.log(question);
        i = i+1;
    }

   
   
   
   
   
   
   };
    
    $(".timeBlock").html("<h3>" + count + "</h3>"); 

};
    
});  
    

//onclick functions for answers
        $("#a").on("click", function (){
            //console.log(answerArray[i]);
            if (answerArray[i]=== 0 || answerArray[i]=== 2 ) {
            alert("correct");
            correctAnswer++;
            $("#correct").html("<h1>Correct = " + correctAnswer + "</h1>");
            question++;
        } else if (answerArray[i] !== 0 || answerArray[i] !== 2 ) {
          alert("wrong");
         incorrectAnswer++;       
         //console.log(answerArray[i] + "Answer#");
           $("#incorrect").html("<h1>Incorrect = " + incorrectAnswer + "</h1>");
           question++;
            
       }
        if (question < 10) {
            $( timer ).trigger( "click" );
            count = 15
            i = i+1;
    }
    
            });
  

       $("#b").on("click", function (){
           // console.log(answerArray[i] + "Answer#");
            if (answerArray[i] === 5 || answerArray[i] === 9) {
            alert("correct");
            correctAnswer++;
            $("#correct").html("<h1>Correct = " + correctAnswer + "</h1>");
            question++;
            } else if (answerArray[i] !== 5 || answerArray[i] !== 9) {
          alert("wrong");
         incorrectAnswer++;       
        // console.log(answerArray[i] + "Answer#");
           $("#incorrect").html("<h1>Incorrect = " + incorrectAnswer + "</h1>");
           question++;
                
       }
         if (question < 10) {
            $( timer ).trigger( "click" );
            count = 15
            i = i+1;}
    
            });

            
    
         $("#c").on("click", function (){
            //console.log(answerArray[i] + "Answer#");
            if (answerArray[i]=== 1 || answerArray[i]=== 3 || answerArray[i] === 6 ) {
            alert("correct");
            correctAnswer++;
            $("#correct").html("<h1>Correct = " + correctAnswer + "</h1>");
            question++;
            } else if (answerArray[i] !== 1 || answerArray[i] !== 3 || answerArray[i] !== 6 ) {
          alert("wrong");
         incorrectAnswer++;       
        // console.log(answerArray[i] + "Answer#");
           $("#incorrect").html("<h1>Incorrect = " + incorrectAnswer + "</h1>");
           question++;
               
       }
         if (question < 10) {
            $( timer ).trigger( "click" );
            count = 15
            i = i+1;}
    
            });

    
         $("#d").on("click", function (){
           // console.log(answerArray[i] + "Answer#");
            if (answerArray[i]=== 4 || answerArray[i] === 7 || answerArray[i] === 8) {
            alert("correct");
            correctAnswer++;
            $("#correct").html("<h1>Correct = " + correctAnswer + "</h1>");
            question++;
            } else if (answerArray[i] !== 4 || answerArray[i] !== 7 || answerArray[i] !== 8) {
          alert("wrong");
         incorrectAnswer++;       
        // console.log(answerArray[i] + "Answer#");
           $("#incorrect").html("<h1>Incorrect = " + incorrectAnswer + "</h1>");
           question++;
                
       }
         if (question < 10) {
            $( timer ).trigger( "click" );
            count = 15
            i = i+1;}
    
            });
