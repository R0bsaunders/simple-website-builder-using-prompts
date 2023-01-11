var headingName = prompt("What is the heading?");

if (headingName == 'null') {
  headingName = '';
} else {
  var h1 = document.createElement('h1');

  h1.textContent = headingName;

  h1.style.cssText = 'text-align: center;'

  document.body.appendChild(h1);
};

do {

  var divCols = prompt("How many columns would you like?");

  if (divCols != parseInt(divCols)) {
    alert("You must enter a number")
  } else {
    break;
  }

} while (true);



var bodyDiv = document.createElement('div')

bodyDiv.setAttribute("id", "userDiv")

bodyDiv.style.cssText = 'display: flex; flex-wrap: wrap; justify-content: center;'

document.body.appendChild(bodyDiv)

for (var i = 0; i < divCols; i++) {

  var col = document.createElement('p')
  col.setAttribute("id", "column " + (i+1));
  col.textContent = prompt("What text goes in paragraph " + (i+1));
  var c = prompt("What color background?").toUpperCase();
  if (c == 'BLACK') {
    var t = 'white'

  } else {
    t = 'black'
  }

  document.body.children[2].appendChild(col);
  col.style.cssText = `background-color: ${c}; border: 1px solid black; margin: 10px; padding: 5px; color: ${t}`

};


/*
// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

tagName = confirm("Would you like to add another tag?");

if (tagName === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}
*/