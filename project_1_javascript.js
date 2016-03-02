


function start(){
    console.log("1");
    var radioButton = document.getElementsByName("choice");
    console.log("2");
    var checked;
    for(var i = 0; i < radioButton.length; i++){
        console.log("3");
        if(radioButton[i].checked){
            if(radioButton[i].value == "Encrypt"){
                var enc = encrypt();
            } else if(radioButton[i].value == "Decrypt"){
                var dec = decrypt();
            }
        }
    }

    function encrypt(){
        var textToChange = document.getElementById("userTextArea").value;
        var userTextArray = textToChange.split("");
        console.log(userTextArray[1]); <!--GOOD-->
        var morseArray = [];

        for(var i = 0; i < userTextArray.length; i++){
            var stage = userTextArray[i].toUpperCase();
            var addToMorse = convert(stage);
            morseArray.push(addToMorse);
        }

        var outputText = morseArray.join(" ");
        var polishedOutputText = outputText.replace(",", " ");
        var outPutBox = document.getElementById("outputTextArea");
        outPutBox.value = polishedOutputText;
    }

    function decrypt(){
        var textToChange2 = document.getElementById("userTextArea").value;
        var userTextArray2 = textToChange2.split(" ");
        var letterArray = [];

        for(var i=0; i < userTextArray2.length; i++){
            var stage2 = userTextArray2[i].toUpperCase();
            var addToLetters = convert2(stage2);
            letterArray.push(addToLetters);
        }

        var outputText2 = letterArray.join("");
        var polishedOutputText2 = outputText2.replace(",", " ");
        var outputBox2 = document.getElementById("outputTextArea");
        outputBox2.value = polishedOutputText2;
    }

    function convert2(morse){
        var letter;

        switch(morse){
            case ".-":
                letter = "A";
                break
            case "-...":
                letter = "B";
                break
            case "-.-.":
                letter = "C";
                break
            case "-..":
                letter = "D";
                break
            case ".":
                letter = "E";
                break
            case "..-.":
                letter = "F";
                break
            case "--.":
                letter = "G";
                break
            case "....":
                letter = "H";
                break
            case "..":
                letter = "I";
                break
            case ".---":
                letter = "J";
                break
            case "-.-":
                letter = "K";
                break
            case ".-..":
                letter = "L";
                break
            case "--":
                letter = "M";
                break
            case "-.":
                letter = "N";
                break
            case "---":
                letter = "O";
                break
            case ".--.":
                letter = "P";
                break
            case "--.-":
                letter = "Q";
                break
            case ".-.":
                letter = "R";
                break
            case "...":
                letter = "S";
                break
            case "-":
                letter = "T";
                break
            case "..-":
                letter = "U";
                break
            case "...-":
                letter = "V";
                break
            case ".--":
                letter = "W";
                break
            case "-..-":
                letter = "X";
                break
            case "-.--":
                letter = "Y";
                break
            case "--..":
                letter = "Z";
                break
            case "/":
                letter = " ";
            default:
                letter = "-";
        }
        return letter;
    }


    function convert(letter){
        var morse;

        switch(letter){
            case "A":
                morse = ".-";
                break
            case "B":
                morse = "-...";
                break
            case "C":
                morse = "-.-.";
                break
            case "D":
                morse = "-..";
                break
            case "E":
                morse = ".";
                break
            case "F":
                morse = "..-.";
                break;
            case "G":
                morse = "--.";
                break
            case "H":
                morse = "....";
                break
            case "I":
                morse = "..";
                break
            case "J":
                morse = ".---";
                break
            case "K":
                morse = "-.-";
                break
            case "L":
                morse = ".-..";
                break
            case "M":
                morse = "--";
                break
            case "N":
                morse = "-.";
                break
            case "O":
                morse = "---";
                break
            case "P":
                morse = ".--.";
                break
            case "Q":
                morse = "--.-";
                break
            case "R":
                morse = ".-.";
                break
            case "S":
                morse = "...";
                break
            case "T":
                morse = "-";
                break
            case "U":
                morse = "..-";
                break
            case "V":
                morse = "...-";
                break
            case "W":
                morse = ".--";
                break
            case "X":
                morse = "-..-";
                break
            case "Y":
                morse = "-.--";
                break
            case "Z":
                morse = "--..";
                break
            case " ":
                morse = "/";
                break
            case ".":
                morse = "";
            case ",":
                morse = "";
            case "'":
                morse = "";
            default:
                morse = " ";
        }
        return morse;
    }

}