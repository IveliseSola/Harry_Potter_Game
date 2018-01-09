$(document).ready(function() { 

    var fighter = {
        name:"",
        healthPoints: 0,
        attackPower: 0,
        counterAtackPower:0,

        constructor(name, healthPoints, attackPower, counterAtackPower) {
            this.name = name;
            this.healthPoints = healthPoints;
            this.attackPower;
            this.counterAtackPower = counterAtackPower;
        }
    };

    var gryffindor = new fighter ("Gryffindor", 150, 20, 0);
    var slytherin = new fighter ("Slythering", 180, 25, 0);
    var ravenclaw = new fighter ("Ravenclaw", 120, 8, 0);
    var hufflepuff = new fighter ("Hufflepuff", 100, 5, 0);

    var fighters = [gryffindor, slytherin, ravenclaw, hufflepuff];
});