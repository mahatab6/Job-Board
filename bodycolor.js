
const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#a0c4ff", "#bdb2ff"];
let colorIndex = 0; 

document.getElementById("body-color").addEventListener("click", function(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});




