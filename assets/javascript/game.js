$(document).ready(function () {

    //variables
    var wins = 0;
    var losses = 0;
    var targetNumber = 18 + Math.floor(Math.random() * 102);
    var score = "";
    var crystalValue1 = 1 + Math.floor(Math.random() * 12);
    var crystalValue2 = 1 + Math.floor(Math.random() * 12);
    var crystalValue3 = 1 + Math.floor(Math.random() * 12);
    var crystalValue4 = 1 + Math.floor(Math.random() * 12);
    //initial values

  $("#random-number").text(targetNumber);


    //onclick functionality
    $(".crystal1").click(function () {
        if (score < targetNumber) {
            alert("You added " + crystalValue1 + " points to your energy level!");
            score = parseInt(score + crystalValue1);
            $(".score").text(score);


    } else if (score >= targetNumber + 1) {
            alert("Oh no, you lost!");
            losses++;
            $(".losses").text(losses);
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        } else if (score === targetNumber) {
            alert("YOU WIN!!");
            wins++;
            $(".wins").text(wins);
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        }
    });

    $(".crystal2").click(function () {
        if (score < targetNumber) {
            alert("You added " + crystalValue2 + " points to your energy level!");
            score = parseInt(score + crystalValue2);
            $(".score").text(score);
        } else if (score >= targetNumber + 1) {
            alert("Oh no, you lost!");
            losses++;
            $(".losses").text(losses);
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        } else if (score === targetNumber) {
            alert("YOU WIN!!");
            wins++;
            $(".wins").text(wins);
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        };
    })

    $(".crystal3").click(function () {
        if (score < targetNumber) {
            alert("You added " + crystalValue3 + " points to your energy level!");
            score = parseInt(score + crystalValue3);
            $(".score").text(score);
        } else if (score >= targetNumber + 1) {
            alert("Oh no, you lost!");
            losses++;
            $(".losses").text(losses);
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        } else if (score === targetNumber) {
            alert("YOU WIN!!");
            wins++;
            $(".wins").text(wins);
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        };
    })

    $(".crystal4").click(function () {
        if (score < targetNumber) {
            alert("You added " + crystalValue4 + " points to your energy level!");
            score = parseInt(score + crystalValue4);
            $(".score").text(score);
        } else if (score >= targetNumber + 1) {
            alert("Oh no, you lost!");
            losses++;
            $(".losses").text(losses);
             targetNumber = 18 + Math.floor(Math.random() * 102);
             $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score);
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        } else if (score === targetNumber) {
            alert("YOU WIN!!");
            wins++;
            $(".wins").text(wins);
            $(".crystals").click(function(){return false;});
            targetNumber = 18 + Math.floor(Math.random() * 102);
            $("#random-number").text(targetNumber);
            score = "";
            $(".score").text(score)
            crystalValue1 = 1 + Math.floor(Math.random() * 12);
            crystalValue2 = 1 + Math.floor(Math.random() * 12);
            crystalValue3 = 1 + Math.floor(Math.random() * 12);
            crystalValue4 = 1 + Math.floor(Math.random() * 12);
        };
    })









})


