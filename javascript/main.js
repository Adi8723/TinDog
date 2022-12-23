let carackters = 140
// let a = carackters.length

// alert(`Sie haben ${a} geschrieben und sie haben noch ${180} buchstaben zu vervügung `);

alert(prompt('compare your carackters ').slice(0,140))

// Uppercase the name 

let name=prompt('What is your name ');
let firstChar = name.slice(0,1)
let UpperCaseFC = firstChar.toUpperCase()


let restOfName = name.slice(1, name.length)
let l = UpperCaseFC + restOfName.toLowerCase()
alert(l)

// dog age 

let dogage=prompt('How old is your dog age ');

let d =((dogage -2)*4)+21
alert(d)

function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }



  function lifeInWeeks(age) {
        let YearRemainig = 90 - age
        let days = YearRemainig* 365;
        let weeks = YearRemainig * 52;
        let months = YearRemainig *12;
        
        
        
        console.log('You have ' + days + ' days, ' + weeks + ' weeks, and ' + months +  ' months left.')
       
    
    }
    
    lifeInWeeks(56)



    function getMilk(money,CostPerBottle) {   
      console.log("leaveHouse");
      console.log("moveRight");
      console.log("moveRight");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveRight");
      console.log("moveRight");
      
      console.log("buy " + ClkBotl(money, CostPerBottle) + " bolltes of milk");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("enterHouse");
      return changeMoney(money,CostPerBottle)
    }
  getMilk(2.5)
  
  function ClkBotl(startinmoney, CostPerBottle){
      let numberOfBottles = Math.floor(startinmoney / CostPerBottle)
      return numberOfBottles
  }
  
  function changeMoney(startinmoney, CostPerBottle){
      let change = startinmoney % CostPerBottle
      return change
  }
  console.log("Hallo master here is "+ getMilk(10, 1.5) + " change");



  function bmiCalculator(weight, height) {
    // let a = weight/(height*height)
    let a = weight/Math.pow(height,2)
     return Math.round(a)
 }
 
 var bmi = bmiCalculator(65, 1.8);
 console.log(bmi)