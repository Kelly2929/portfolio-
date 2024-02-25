//ex 1 
setTimeout (function() {
    alerte ("Hello World");
}, 2000);

//part 2
setTimeout(function() {
document.getElementById(`container`).innerHTML=<p>Hello World</p> ;
},2000);


// Part III
let intervalId = setInterval(function() {
    let container = document.getElementById('container');
    container.innerHTML += '<p>Hello World</p>';

    // pas compris (let ou const)
    let paragraphs = container.getElementsByTagName('p');
    if (paragraphs.length === 5) {
        clearInterval(intervalId);
    }
}, 2000);

// pas compris
document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);  
});
//part 3 pas compris

let paragraphCount = 0;

function addParagraph() {
  const container = document.getElementById("container");
  const newParagraph = document.createElement("p"); 
  newParagraph.textContent = "Hello World";
  container.appendChild(newParagraph);
  paragraphCount++; 

  if (paragraphCount >= 5) {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(addParagraph, 2000);


document.getElementById("clear").addEventListener("click", function() {
  clearInterval(intervalId);
});

