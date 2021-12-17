var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.button-open');
var $closeButton = document.querySelector('.button-close');

$openButton.addEventListener('click', showModal);

function showModal(event) {
  $modal.className = 'modal show';
}

$closeButton.addEventListener('click', hideModal);

function hideModal(event) {
  $modal.className = 'modal';
}
