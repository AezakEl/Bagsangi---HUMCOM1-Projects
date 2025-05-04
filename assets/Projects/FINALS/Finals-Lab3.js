function getResult() {
    //get the value of num1
    var num1 = parseFloat(document.getElementById("num1").value);
    //conver
    var result = num1 * 100000;
    document.getElementById("result1").innerHTML = num1 + " KILOMETER IS " + result + " cm.";
}
