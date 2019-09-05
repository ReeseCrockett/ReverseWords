//setup 
let array = ["This is a test","Hello World","Diana is the Greatest"];
let input = document.getElementById("str");

for(let i = 0; i < array.length; i++) {
    addToList(array[i], 'normalList')
}

for(let i = 0; i < array.length; i++) {
    let reversedText = reverseWordString(array[i]);
    addToList(reversedText, 'reversedList')
}

//Reverse word order
function reverseWordString(text) {
    let reversedText = "";
    let newText = text.split(" ");
    for(let i = newText.length - 1; i >= 0; i--) {
        reversedText += newText[i] + " ";
    }
    return reversedText;
}

//Add to both lists
function addToList(array, list) {
    let text = array;
    let ul = document.getElementById(list);
    let newLi = document.createElement("li");
    let ulLen = ul.getElementsByTagName('li').length+1;
    let textnode = document.createTextNode('case #' + ulLen + ": " + text);
    document.getElementById('counter').innerHTML = ulLen;
    newLi.appendChild(textnode);
    ul.appendChild(newLi);
}

//submit button input
document.getElementById("btn").addEventListener("click", function() {
    if (input.value !== '') {
        let text = input.value; 
        addToList(text, 'normalList');
        let reversedText = reverseWordString(text);
        addToList(reversedText, "reversedList");
        document.getElementById('str').value = ""
    }
});

// input submitted up enter key
input.addEventListener("keyup", function(event) {
    if (input.value !== '') {
        if (event.keyCode === 13) {
            document.getElementById("btn").click();
        }
    }
});