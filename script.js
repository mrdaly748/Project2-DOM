document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("color-box");
    const changeColorButton = document.getElementById("change-color-btn");
  
    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Event listener to change color of the box when button is clicked
    changeColorButton.addEventListener("click", function() {
      colorBox.style.backgroundColor = getRandomColor();
    });
  });
  