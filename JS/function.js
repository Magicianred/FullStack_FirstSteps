function getMilk(money, costPerBottle) {   //TAKES INPUT
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBottles (money, costPerBottle) + " bottles of milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange (money, costPerBottle); //RETURNS OUTPUT (change of buying milk)
  }

  function calcBottles (startingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }

  function calcChange (startingMoney, costPerBottle) {
      var change = startingMoney % costPerBottle;
      return change;
  }

  console.log("Hello there, here is your " + getMilk(5, 1.5) + " change.");
  