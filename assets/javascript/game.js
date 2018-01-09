$(document).ready(function () {

    function Fighter(name, healthPoints, attackPower, counterAtackPower) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAtackPower = counterAtackPower;
    }

    var gryffindor = new Fighter("Gryffindor", 150, 20, 0);
    var slytherin = new Fighter("Slythering", 180, 25, 0);
    var ravenclaw = new Fighter("Ravenclaw", 120, 8, 0);
    var hufflepuff = new Fighter("Hufflepuff", 100, 5, 0);

    var fighters = [gryffindor, slytherin, ravenclaw, hufflepuff];

    $("#gryffindor").append(gryffindor.healthPoints);
    $("#gryffindor").css({ "text-align": "center" });
    $("#slytherin").append(slytherin.healthPoints);
    $("#slytherin").css({ "text-align": "center" });
    $("#ravenclaw").append(ravenclaw.healthPoints);
    $("#ravenclaw").css({ "text-align": "center" });
    $("#hufflepuff").append(hufflepuff.healthPoints);
    $("#hufflepuff").css({ "text-align": "center" });

    $(".fighter").on("click", function () {
        var myId = $(this).attr("id");
        $(".your-fighter").append(this);
        $(".fighter").addClass("myClass");
    });

    $(".myClass").on("click", function () {
        var myId = $(this).attr("id");
        $(".defender").append(this);
        var newButton = $(`<button style="color:#bda116fa;">Attack
        </button>`);
        $(".defender").append(newButton);
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