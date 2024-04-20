function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  let colorText = document.getElementById('color-text');
  let newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
  colorText.style.color = '#FFFFFF';
  colorText.style.fontFamily = 'Ubuntu';
}
let main = document.querySelectorAll(".main");
main.forEach(function(element){
  element.style.textAlign = 'center';
  element.style.fontFamily = 'Ubuntu';
})
  