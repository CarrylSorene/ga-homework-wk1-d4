//BASIC

var firstNum = document.getElementById("basic-num-1");
var secondNum = document.getElementById("basic-num-2");
var op = document.getElementById("basic-operation");

    document.getElementById('basic-calc').addEventListener("click", function(e){
      firstNum = document.getElementById("basic-num-1").value;
      secondNum = document.getElementById("basic-num-2").value;
      op = document.getElementById("basic-operation").value;

        firstNum = parseFloat(firstNum);
        secondNum = parseFloat(secondNum);

          if (op === "+") { 
              console.log(firstNum + secondNum);
              var answer = (firstNum + secondNum);
            }

            else if (op === "-") {
              console.log(firstNum - secondNum);
              var answer = (firstNum - secondNum);
            }

            else if (op === "*") {
              console.log(firstNum * secondNum);
              var answer = (firstNum * secondNum);
            }

            else if (op === "/") {
              console.log(firstNum / secondNum);
              var answer = (firstNum / secondNum);
            }

            else if (firstNum === NaN && secondNum === NaN) {
              alert("That is not a number. Please try again");
            }
             
      // finally, display the result

            console.log("The answer is " + answer)
            document.getElementById("basic-answer").className = "show";
            document.getElementById("basic-answer-alert").innerHTML = "The answer is " + answer;
    });


    //TRIP

    var dist = document.getElementById("trip-distance");
    var mpg = document.getElementById("trip-mpg");
    var cost = document.getElementById("trip-cost");
    var speed = document.getElementById("trip-speed");

      document.getElementById('trip-calc').addEventListener("click", function(e){
        dist = document.getElementById("trip-distance").value;
        mpg = document.getElementById("trip-mpg").value;
        cost = document.getElementById("trip-cost").value;
        speed = document.getElementById("trip-speed").value;

          dist = parseFloat(dist);
          mpg = parseFloat(mpg);
          cost = parseFloat(cost);
          speed  = parseFloat(speed);

            var time = dist / speed;
            time = Math.round(time * 100) / 100; // round it to two decimals
            var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

              var cost = (dist / actualMPG * cost);
              cost = Math.round(cost * 100) / 100;

    //finally, display the result

                console.log("Your trip will take " + time + " hours and cost $" + cost)
                document.getElementById("trip-answer").className ="show";
                document.getElementById("trip-answer-alert").innerHTML = "Your trip will take " + time + " hours and cost $" + cost;
    });

 // BMI

    var mass = document.getElementById("bmi-mass");
    var height = document.getElementById("bmi-height");

      document.getElementById('bmi-calc').addEventListener("click", function(e){
        mass = document.getElementById("bmi-mass").value;
        height = document.getElementById("bmi-height").value;

          mass = parseFloat(mass);
          height = parseFloat(height);
          console.log(mass, height, mass / Math.pow(height, 2))

            bmi = mass / Math.pow(height, 2);
            bmi = Math.round(bmi * 100) / 100; // round it to two decimals

      // finally, display the result

              console.log("your BMI is " + bmi)
              document.getElementById("bmi-answer").className ="show";
              document.getElementById("bmi-answer-alert").innerHTML = "your BMI is " + bmi;
      });

    // Mortgage

    var loan = document.getElementById("mortgage-loan");
    var apr = document.getElementById("mortgage-apr");
    var term = document.getElementById("mortgage-term");

      document.getElementById('mortgage-calc').addEventListener("click", function(e){
        loan = document.getElementById("mortgage-loan").value;
        apr = document.getElementById("mortgage-apr").value;
        term = document.getElementById("mortgage-term").value;

          loan = parseFloat(loan);
          apr = parseFloat(apr) / 100 / 12;
          term = parseFloat(term);

            var temp = Math.pow((1 + apr), term);
            var payment = loan * apr * temp / (temp - 1);
            payment = Math.round(payment * 100) / 100; // round to 2 decimals

      // finally, display the result

              console.log("Your monthly payment will be $" + payment)
              document.getElementById("mortgage-answer").className ="show";
              document.getElementById("mortgage-answer-alert").innerHTML = "Your monthly payment will be $" + payment;
      });
