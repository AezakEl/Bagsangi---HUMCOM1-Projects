function getResult() {
    //get the value of num1
    var num1 = parseFloat(document.getElementById("num1").value);

    //determine if even and odd then display
    if (num1 % 2 == 0) {
        document.getElementById("result1").innerHTML = "THE NUMBER IS EVEN";
    } else if (num1 % 2 != 0) {
        document.getElementById("result1").innerHTML = "THE NUMBER IS ODD";
    }

    //count how many numbers divide it exactly
    var counter = 0;
    for (var i = 1; i <= num1; i++) {
        if (num1%i == 0) {
            counter++;
        }
    }

    //determine if prime and composite based on the counter then display
    if (num1 <= 1) {
        document.getElementById("result2").innerHTML = "INVALID";
    }
    else if (counter < 3) {
        document.getElementById("result2").innerHTML = "THE NUMBER IS PRIME";
    } else if (counter >= 3) {
        document.getElementById("result2").innerHTML = "THE NUMBER IS COMPOSITE";
    }
}

//1km=100k