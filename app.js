let mycursor = document.querySelector(".cursor");
let circle = document.querySelector(".circle");
let square = document.querySelector(".square");
let rectangle = document.querySelector(".rectangle");

var top=screen.height;
var left=screen.width;

window.addEventListener ("mousemove", cursor);

function cursor(e){

mycursor.style.top = e.pageY + "px";
mycursor.style.left = e.pageX + "px";
}

circle.addEventListener("mouseenter", () => {
  mycursor.classList.add('circle1');
  mycursor.classList.remove('square1');
  mycursor.classList.remove('rectangle1');
  document.querySelector(".circle").style.display = 'none';
  document.querySelector(".square").style.display = 'block';
  document.querySelector(".rectangle").style.display = 'block';
  circle.style.top =(Math.random() * top) + "px";
  circle.style.left = (Math.random() * left) + "px";
  document.body.style.background = "purple";
  
});

square.addEventListener("mouseenter", () => {
  mycursor.classList.add('square1');
  mycursor.classList.remove('circle1');
  mycursor.classList.remove('rectangle1');
  document.querySelector(".square").style.display = 'none';
  document.querySelector(".circle").style.display = 'block';
  document.querySelector(".rectangle").style.display = 'block';
  square.style.top = (Math.random() * top) + "px";
  square.style.left =(Math.random() * left) + "px";

  document.body.style.background = "pink";
});

rectangle.addEventListener("mouseenter", () => {
  mycursor.classList.add('rectangle1');
  mycursor.classList.remove('circle1');
  mycursor.classList.remove('square1');
  document.querySelector(".rectangle").style.display = 'none';
  document.querySelector(".circle").style.display = 'block';
  document.querySelector(".square").style.display = 'block';
  rectangle.style.top = (Math.random() * top) + "px";
  rectangle.style.left = (Math.random() * left) + "px";

  document.body.style.background = "lightblue";
});
