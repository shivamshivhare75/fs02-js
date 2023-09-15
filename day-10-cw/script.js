const circle = document.getElementById("circle");
const innerShape = document.getElementById("innerShape");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeShapeBtn = document.getElementById("changeShapeBtn");

const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"];
let currentColorIndex = 0;

changeColorBtn.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  circle.style.backgroundColor = colors[currentColorIndex];
});

changeShapeBtn.addEventListener("click", () => {
  const shapes = ["pentagon", "square", "hexagon" ]; 
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  innerShape.className = `inner-shape ${randomShape}`;
});

// Initial shape
innerShape.className = "inner-shape rectangle";
