var $span = document.querySelectorAll('span');
document.addEventListener('keydown', typeTutor);

var letterIndex = 0;

function typeTutor(event) {
  if (event.code === 'Space') {
    $span[letterIndex].className = ('correct');
    letterIndex++;
  } else if ($span[letterIndex].textContent !== event.key) {
    $span[letterIndex].className = ('cursor incorrect');
    return $span[letterIndex];
  } else if ($span[letterIndex].textContent === event.key) {
    $span[letterIndex].className = ('correct');
    letterIndex++;
    $span[letterIndex].className = ('cursor');
    return $span[letterIndex];
  }
}
