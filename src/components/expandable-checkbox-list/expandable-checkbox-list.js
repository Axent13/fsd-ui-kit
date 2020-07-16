const $expandableCheckboxList = $('.js-expandable-checkbox-list');
const $checkboxesContainer = $('.js-expandable-checkbox-list__checkboxes');
const $arrow = $('.expandable-checkbox-list__arrow');

function handleCheckboxContainerClick() {
  $checkboxesContainer.toggleClass('expandable-checkbox-list__checkboxes_hidden');
  $arrow.toggleClass('expandable-checkbox-list__arrow_opened');
}

function initEventListeners() {
  $expandableCheckboxList.on('click', handleCheckboxContainerClick);
}
initEventListeners();
