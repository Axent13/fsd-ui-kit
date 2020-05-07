const $select = $('.js-item-quantity-dropdown__select');
const $optionsContainer = $('.js-item-quantity-dropdown__options-container');

function handleSelectClick() {
  $optionsContainer.toggleClass('item-quantity-dropdown__options-container_opened');
}

function initEventListeners() {
  $select.on('click', handleSelectClick);
}

initEventListeners();
