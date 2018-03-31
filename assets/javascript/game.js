$(document).ready(function () {
$("audio").hide();
    //variables
    
    var wins = 0;
    var losses = 0;
    var targetNumber = 18 + Math.floor(Math.random() * 102);
    var score = 0;

    //initial values
    function assignValues() {
        $('.crystal1').attr('data-num', 1 + Math.floor(Math.random() * 12)) ;
        $('.crystal2').attr('data-num', 1 + Math.floor(Math.random() * 12));
        $('.crystal3').attr('data-num', 1 + Math.floor(Math.random() * 12));
        $('.crystal4').attr('data-num', 1 + Math.floor(Math.random() * 12));        
    }

    $("#random-number").text(targetNumber);

    function resetGame() {
        targetNumber = 18 + Math.floor(Math.random() * 102);
        $("#random-number").text(targetNumber);
        score = 0;
        $(".score").text(score);
        assignValues();
    };

    assignValues();
     //onclick functionality

$('.crystal').on('click', function (e) {
var num = parseInt($(this).attr('data-num'));
        console.log(num);
        score += num;
        console.log('target number: ', targetNumber);
        console.log('current score: ', score);
        $(".score").text(score)
        if (score > targetNumber) {
            alert("You Lose, Please Try Again")
            losses++;
            $(".losses").text(losses);
            resetGame();
            $(".score").text(score)
            console.log('this should alert you lossed');
           
        } else if (score === targetNumber){
            alert("You Win!!");
            wins++;
            $(".wins").text(wins);
            $(".score").text(score)
            resetGame();
        }
    });
});

