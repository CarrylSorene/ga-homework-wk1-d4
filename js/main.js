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
              
              console.log("answer")
              var answer = document.getElementById("basic-answer").className ="show";
              document.getElementById("basic-answer-alert").innerHTML = "";
          });
