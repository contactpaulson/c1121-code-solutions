var toggle = true;
var $switch = document.querySelector('.button');
var $background = document.querySelector('.background-light');

function onAndOffSwitch(event) {
  toggle = !toggle;
  if (toggle === false) {
    $switch.className = 'button off';
    $background.className = 'background-dark';
  } else {
    $switch.className = 'button on';
    $background.className = 'background-light';
  }
}
$switch.addEventListener('click', onAndOffSwitch);
