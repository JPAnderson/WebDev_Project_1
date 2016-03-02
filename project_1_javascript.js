


function start(){
    var radioButton = document.getElementsByName("choice"); //get the radio buttons and put them ina lit
    for(var i = 0; i < radioButton.length; i++){ //For every item in the list
        if(radioButton[i].checked) //See if the R.B. is checked
            if(radioButton[i].value == "Encrypt"){ //if yes, if the R.Bs value = "Encrypt"
                var enc = encrypt(); //run the encrypt function
            } else if(radioButton[i].value == "Decrypt"){ //If it's anything else
                var dec = decrypt(); //run decrypt
            }
        }
    }

    function encrypt(){
        var textToChange = document.getElementById("userTextArea").value; //Get the text in the user box
        var userTextArray = textToChange.split(""); //Put each CHARACTER into an array
        var morseArray = []; //Make an empty array. We'll populate this with morse code later

        for(var i = 0; i < userTextArray.length; i++){ //For each element
            var stage = userTextArray[i].toUpperCase(); //Convert it to upper case (for consistency and error handling)
            var addToMorse = convert(stage); //convert it to MORSE
            morseArray.push(addToMorse); //push it into our empty array
        }

        //When it's done...
        var outputText = morseArray.join(" "); //Join the array elements. Separate with a space
        var polishedOutputText = outputText.replace(",", " "); //replace commas added by program with spaces
        var outPutBox = document.getElementById("outputTextArea");
        outPutBox.value = polishedOutputText; //Put the finalized string into the box
    }

    function decrypt(){
        //decrypt is fundamentally similar to encrypt. Basically just works in reverse
        var textToChange2 = document.getElementById("userTextArea").value;
        var userTextArray2 = textToChange2.split(" ");
        var letterArray = [];

        for(var i=0; i < userTextArray2.length; i++){
            var stage2 = userTextArray2[i].toUpperCase();
            var addToLetters = convert2(stage2);
            letterArray.push(addToLetters);
        }

        var outputText2 = letterArray.join(""); //Join with a comma (default) instead of a space
        var polishedOutputText2 = outputText2.replace(",", " "); //...then replace the commas with spaces.
        var outputBox2 = document.getElementById("outputTextArea");
        outputBox2.value = polishedOutputText2;
    }

    //This function converts morse to English
    function convert2(morse){ //<--sent from ^
        var letter;

        switch(morse){ //convert the morse character to it's letter equivalent and assign it to letter
            case ".-":
                letter = "A";
                break;
            case "-...":
                letter = "B";
                break;
            case "-.-.":
                letter = "C";
                break;
            case "-..":
                letter = "D";
                break;
            case ".":
                letter = "E";
                break;
            case "..-.":
                letter = "F";
                break;
            case "--.":
                letter = "G";
                break;
            case "....":
                letter = "H";
                break;
            case "..":
                letter = "I";
                break;
            case ".---":
                letter = "J";
                break;
            case "-.-":
                letter = "K";
                break;
            case ".-..":
                letter = "L";
                break;
            case "--":
                letter = "M";
                break;
            case "-.":
                letter = "N";
                break;
            case "---":
                letter = "O";
                break;
            case ".--.":
                letter = "P";
                break;
            case "--.-":
                letter = "Q";
                break;
            case ".-.":
                letter = "R";
                break;
            case "...":
                letter = "S";
                break;
            case "-":
                letter = "T";
                break;
            case "..-":
                letter = "U";
                break;
            case "...-":
                letter = "V";
                break;
            case ".--":
                letter = "W";
                break;
            case "-..-":
                letter = "X";
                break;
            case "-.--":
                letter = "Y";
                break;
            case "--..":
                letter = "Z";
                break;
            case "-----":
                letter = "0";
                break;
            case ".----":
                letter = "1";
                break;
            case "..---":
                letter = "2";
                break;
            case "...--":
                letter = "3";
                break;
            case "....-":
                letter = "4";
                break;
            case ".....":
                letter = "5";
                break;
            case "-....":
                letter = "6";
                break;
            case "--...":
                letter = "7";
                break;
            case "---..":
                letter = "8";
                break;
            case "----.":
                letter = "9";
                break;
            case ".-.-.":
                letter = "+";
                break;
            case "-...-":
                letter = "=";
                break;
            case "-..-.":
                letter = "/";
                break;
            case "..--..":
                letter = "?";
                break;
            case "..--.-":
                letter = "_";
                break;
            case ".-..-.":
                letter = '"';
                break;
            case ".-.-.-":
                letter = ".";
                break;
            case ".--.-.":
                letter = "@";
                break;
            case ".----.":
                letter = "'";
                break;
            case "-....-":
                letter = "-";
                break;
            case "-.-.-.":
                letter = ";";
                break;
            case "-.-.--":
                letter = "!";
                break;
            case "--..--":
                letter = ",";
                break;
            case "---...":
                letter = ":";
                break;

            default:
                letter = " ";
        }
        return letter;
    }


    //This function converts english to morse
    function convert(letter){ // <-- sent from ^
        var morse;

        switch(letter){ //convert the letter to it's morse equivalent and assign it to morse
            case "A":
                morse = ".-";
                break;
            case "B":
                morse = "-...";
                break;
            case "C":
                morse = "-.-.";
                break;
            case "D":
                morse = "-..";
                break;
            case "E":
                morse = ".";
                break;
            case "F":
                morse = "..-.";
                break;
            case "G":
                morse = "--.";
                break;
            case "H":
                morse = "....";
                break;
            case "I":
                morse = "..";
                break;
            case "J":
                morse = ".---";
                break;
            case "K":
                morse = "-.-";
                break;
            case "L":
                morse = ".-..";
                break;
            case "M":
                morse = "--";
                break;
            case "N":
                morse = "-.";
                break;
            case "O":
                morse = "---";
                break;
            case "P":
                morse = ".--.";
                break;
            case "Q":
                morse = "--.-";
                break;
            case "R":
                morse = ".-.";
                break;
            case "S":
                morse = "...";
                break;
            case "T":
                morse = "-";
                break;
            case "U":
                morse = "..-";
                break;
            case "V":
                morse = "...-";
                break;
            case "W":
                morse = ".--";
                break;
            case "X":
                morse = "-..-";
                break;
            case "Y":
                morse = "-.--";
                break;
            case "Z":
                morse = "--..";
                break;
            case " ":
                morse = "/";
                break;
            case ".":
                morse = ".-.-.-";
                break;
            case ",":
                morse = "--..--";
                break;
            case "'":
                morse = ".----.";
                break;
            case "?":
                morse = "..--..";
                break;
            case "_":
                morse = "..--.-";
                break;
            case '"':
                morse = ".-..-.";
                break;
            case "@":
                morse = ".--.-.";
                break;
            case "-":
                morse = "-....-";
                break;
            case ";":
                morse = "-.-.-.";
                break;
            case "!":
                morse = "-.-.--";
                break;
            case ":":
                morse = "---...";
                break;
            case "0":
                morse = "-----";
                break;
            case "9":
                morse = "----.";
                break;
            case "8":
                morse = "---..";
                break;
            case "7":
                morse = "--...";
                break;
            case "6":
                morse = "-....";
                break;
            case "5":
                morse = ".....";
                break;
            case "4":
                morse = "....-";
                break;
            case "3":
                morse = "...--";
                break;
            case "2":
                morse = "..---";
                break;
            case "1":
                morse = ".----";
                break;
            default:
                morse = " ";
        }
        return morse;
    }

