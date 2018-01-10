$(document).ready(function () {

    var myBool = false;
    var myFighterId = 0;
    var myDefenderId = 0;
    var count = 0;
    var myDivFighter;
    var myDivDefender;
    var newPowerAttack = 0;

    function Fighter(name, id, healthPoints, attackPower, counterAtackPower) {
        this.name = name;
        this.id = id;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAtackPower = counterAtackPower;
    }

    var gryffindor = new Fighter("Gryffindor", 1, 150, 20, 0);
    var slytherin = new Fighter("Slythering", 2, 180, 25, 0);
    var ravenclaw = new Fighter("Ravenclaw", 3, 120, 8, 0);
    var hufflepuff = new Fighter("Hufflepuff", 4, 100, 5, 0);

    var fighters = [gryffindor, slytherin, ravenclaw, hufflepuff];

    $("#1").append("<p>" + gryffindor.healthPoints + "</p>");
    $("#1").css({ "text-align": "center" });
    $("#2").append("<p>" + slytherin.healthPoints + "</p>");
    $("#2").css({ "text-align": "center" });
    $("#3").append("<p>" + ravenclaw.healthPoints + "</p>");
    $("#3").css({ "text-align": "center" });
    $("#4").append("<p>" + hufflepuff.healthPoints + "</p>");
    $("#4").css({ "text-align": "center" });

    // Player choose a fighter and an opponent

    $(".fighter").on("click", function () {
        if (count < 1) {
            myFighterId = $(this).attr("id");
            myDivFighter = $(this);
            $(".your-fighter").append(this);
            $('.enemies').append($('.character>div'));
            $(".character").remove();
            count++;
        } else if (count === 1) {
            myDefenderId = $(this).attr("id");
            myDivDefender = $(this);
            $(".defender").append(this);
            myBool = true;
            count++;
        } else {
            myDefenderId = $(this).attr("id");
            myDivDefender = $(this);
            $(".defender").append(this);
            myBool = true;
        }
    });

    // Player attack

    $(".attack-btn").on("click", function () {
        if (myBool) {
            var f = returnObj(fighters, myFighterId);
            var d = returnObj(fighters, myDefenderId);
            f.healthPoints = f.healthPoints - d.attackPower;
            d.healthPoints = f.healthPoints - f.attackPower;
            myDivFighter.children("p:first").remove();
            myDivFighter.append("<p>" + f.healthPoints + "</p>");
            myDivDefender.children("p:first").remove();
            myDivDefender.append("<p>" + d.healthPoints + "</p>");
            newPowerAttack += f.attackPower;
            $(".defender-damage").text(" You attacked " + d.name + " for " + newPowerAttack + " damage");
            $(".defender-power-attack").text(d.name + " attacked you back for " + d.attackPower + " damage");
            if (f.healthPoints === 0) {
                $(".player-message").text("You have been defeated… Game Over!!!");
                $('.attack-btn').attr('disabled', 'disabled');
                // $('#Button').removeAttr('disabled');
                var newBtn = $("<button>");
                newBtn.attr("class", "restart-btn");
                newBtn.text("Play Again!");
                $(".player-message").append(newBtn);
            } else if (d.healthPoints <= 0 && defenders list === null)

        } else {
            $(".defender").html("<p>Choose an opponent please</p>");
        }
    });

    function returnObj(firstParameter, secondParameter) {
        for (var i = 0; i < firstParameter.length; i++) {
            if (secondParameter == firstParameter[i].id) {
                return firstParameter[i];
            }
        }
    }

    $(".restart-btn").on("click", function () {
        window.location.reload();
    });


    // function remove(firstParameter, secondParameter) {
    //     return firstParameter.filter(e => e !== secondParameter);
    // }

    // function defenderList(parameter){
    //     for(var i = 0; i < parameter.length; i++){
    //      $("#enemies").append("#parameter");
    // }
    //}
});