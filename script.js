var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var styleAttributes = "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow-wrap: break-word; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)"
var localStorageKeys = Object.keys(localStorage);
var notesQuantity = localStorageKeys.length;

while (notesQuantity--) {
  var note = localStorage.getItem(localStorageKeys[notesQuantity]);

  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = note;
  
  node1.setAttribute("style", styleAttributes);
  node1.style.background = generateColor();
  node1.style.margin = margin();
  node1.style.transform = rotate();
  
  node0.appendChild(node1);
  
  container2.insertAdjacentElement("beforeend", node0);
}

xIcon.addEventListener("click", function(){
  typeNote();
});

checkIcon.addEventListener("click", function(){
  createNote();
});

function typeNote(){
  container3.style.display == 'none' 
    ? container3.style.display = 'block' 
    : container3.style.display = 'none'
}

function createNote(){
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;
  
  localStorage.setItem(Object.keys(localStorage).length + 1, node1.outerHTML);
  
  node1.setAttribute("style", styleAttributes);
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = generateColor();
  
  node0.appendChild(node1);
  
  container2.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("dblclick", function() {
    node0.remove();
  });
  
  document.getElementById("note-text").value = '';
}

function margin(){
  var randomMargin = ["-5px","1px", "5px", "10px","15px","20px"];
  
  return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate(){
  var randomDegree = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];
  
  return randomDegree[Math.floor(Math.random() * randomDegree.length)];
}

function generateColor(){
  var randomColor = new Array();

  for (index = 0; index < 6; index++ ) {
    var value = Math.floor(Math.random() * 16);

    switch (value) {
      case 10:
        value = 'a';
        break;
      case 11:
        value = 'b';
        break;
      case 12:
        value = 'c';
        break;
      case 13:
        value = 'd';
        break;
      case 14:
        value = 'e';
        break;
      case 15:
        value = 'f';
        break;
    }

    randomColor.push(value);
  }

  return String('#' + randomColor.join(''));

  //** Prefixed colors **//

  // var prefixedColor = ["#ff3de8", "#c2ff3d","#3dc2ff","#04e022","#bc83e6","#ebb328"];
  // var index = Math.floor(Math.random() * 6);

  // return prefixedColor[index];
}
