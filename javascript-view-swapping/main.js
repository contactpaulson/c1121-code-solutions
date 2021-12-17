var $tabContainer = document.querySelector('.tab-container');
var $allTabElements = document.querySelectorAll('.tab');
var $allViewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', matchingTab);

function matchingTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTabElements.length; i++) {
      if ($allTabElements[i] === event.target) {
        $allTabElements[i].className = 'tab active';
      } else {
        $allTabElements[i].className = 'tab';
      }
    }

    var dataView = event.target.getAttribute('data-view');
    for (i = 0; i < $allViewElements.length; i++) {
      if ($allViewElements[i].getAttribute('data-view') === dataView) {
        $allViewElements[i].className = 'view';
      } else {
        $allViewElements[i].className = 'view hidden';
      }
    }
  }
}
