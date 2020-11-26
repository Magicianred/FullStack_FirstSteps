
//CONSTRUCTOR FUNCTION BEGGINS WITH CAPITAL WORD
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

var bellBoy1 = new BellBoy ("Timmy", 19, true, ["French", "English"]);

function HouseKeeper (name, age, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper ("Jane", 35, 10, ["bedroom", "bathroom", "lobby"])
