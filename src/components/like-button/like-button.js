const $likeButton = $('.js-like-button');

function handleLikeButtonCounterClick() {
  const $element = $(this);
  const $button = $element.find('.js-like-button__button');
  const $counter = $element.find('.js-like-button__counter');
  let counterValue = parseInt($counter.text(), 10) || 0;

  if ($element.hasClass('like-button_liked')) {
    counterValue -= 1;
    $button.text('favorite_border');
  } else {
    counterValue += 1;
    $button.text('favorite');
  }
  $element.toggleClass('like-button_liked');
  $button.toggleClass('like-button__button_liked');
  $counter.toggleClass('like-button__counter_liked');
  $counter.text(counterValue);
}

function initEventListeners() {
  $likeButton.on('click', handleLikeButtonCounterClick);
}

initEventListeners();
