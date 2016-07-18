var body = document.querySelector('body');
var randomButton = document.querySelector('.changer-button');
var resetButton = document.querySelector('.reset-button');

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGB(){
  var color = 'rgb(' + getRandomNum(1, 255) + ', ' + getRandomNum(1, 255) + ', ' + getRandomNum(1, 255) + ')';
  if (color === 'rgb(255, 255, 255)'){
    return getRandomRGB();
  };
  return color;
};

function changeBackgroundColor(color){
  return body.style.backgroundColor = color;
}

randomButton.addEventListener('click', function(){
  changeBackgroundColor(getRandomRGB());
});

resetButton.addEventListener('click', function(){
  changeBackgroundColor('white');
})
