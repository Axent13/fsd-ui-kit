const optionsDataFromSomewhere = {
  placeholder: 'Удобства номера',
  hasClearAndApplyButtons: true,
  options: [
    {
      name: 'спальни',
      form1: 'спальня',
      form2: 'спальни',
      form5: 'спален',
    },
    {
      name: 'кровати',
      form1: 'кровать',
      form2: 'кровати',
      form5: 'кроватей',
    },
    {
      name: 'ванные комнаты',
      form1: 'ванная комната',
      form2: 'ванных комнаты',
      form5: 'ванных комнат',
    },
  ],
};

// function pluralForm(qauntity, form1, form2, form5) {
//   const reminderOfTheHundred = Math.abs(qauntity) % 100;
//   const reminderOfTheTen = reminderOfTheHundred % 10;
//   if (reminderOfTheHundred > 10 && reminderOfTheHundred < 20) return form5;
//   if (reminderOfTheTen > 1 && reminderOfTheTen < 5) return form2;
//   if (reminderOfTheTen === 1) return form1;
//   return form5;
// }

const $select = $('.js-item-quantity-dropdown__select');
const $arrow = $('.js-item-quantity-dropdown__arrow');
const $options = $('.js-item-quantity-dropdown__options');

function handleSelectClick() {
  $select.toggleClass('item-quantity-dropdown__select_expanded');
  $arrow.toggleClass('item-quantity-dropdown__arrow_expanded');
  $options.toggleClass('item-quantity-dropdown__options_expanded');
}

function initEventListeners() {
  $select.on('click', handleSelectClick);
}

function createOptions(optionsData) {
  optionsData.options.forEach((item) => {
    const $newOption = $('<div class="item-quantity-dropdown__option"></div>');
    const $newOptionName = $(`<div class="item-quantity-dropdown__option-name">${item.name}</div>'`);
    const $newCounterContainer = $('<div class="item-quantity-dropdown__counter-container"></div>');
    const $newDecrement = $('<button class="item-quantity-dropdown__decrement item-quantity-dropdown__decrement_disabled">-</button>');
    const $newCounter = $('<div class="item-quantity-dropdown__counter">0</div>');
    const $newIncrement = $('<button class="item-quantity-dropdown__increment">+</button>');

    $newCounterContainer.append($newDecrement);
    $newCounterContainer.append($newCounter);
    $newCounterContainer.append($newIncrement);
    $newOption.append($newOptionName);
    $newOption.append($newCounterContainer);
    $options.append($newOption);

    function handleIncrementClick() {
      console.log('Increment');
      const newCount = parseInt($newCounter.text(), 10) + 1;
      $newCounter.text(newCount);
      if (newCount > 0) {
        $newDecrement.removeClass('item-quantity-dropdown__decrement_disabled');
      }
    }
    console.log($newIncrement);
    $newIncrement.on('click', handleIncrementClick);

    function handleDecrementClick() {
      console.log('Decrement');
      const newCount = parseInt($newCounter.text(), 10) - 1;
      if (newCount >= 0) {
        $newCounter.text(newCount);
      }
      if (newCount === 0) {
        $newDecrement.addClass('item-quantity-dropdown__decrement_disabled');
      }
    }

    $newDecrement.on('click', handleDecrementClick);
  });
}

function createClearAndApplyButtons() {
  const $clearAndApplyButtonsContainer = $('<div class="item-quantity-dropdown__clear-and-apply-buttons-container"></div>');
  const $clearButton = $('<div class="item-quantity-dropdown__clear item-quantity-dropdown__clear_disabled">Очистить</div>');
  const $applyButton = $('<div class="item-quantity-dropdown__apply">Применить</div>');

  $clearAndApplyButtonsContainer.append($clearButton);
  $clearAndApplyButtonsContainer.append($applyButton);
  $options.append($clearAndApplyButtonsContainer);
}

initEventListeners();
createOptions(optionsDataFromSomewhere);
if (optionsDataFromSomewhere.hasClearAndApplyButtons === true) createClearAndApplyButtons();
