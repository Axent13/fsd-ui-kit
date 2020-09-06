import Counter from './counter';

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


class ItemQuantityDropdown {
  constructor($rootElement, options = {}) {
    this.$rootElement = $rootElement;
    this.$select = this.$rootElement.find('.js-item-quantity-dropdown__select');
    this.$arrow = this.$rootElement.find('.js-item-quantity-dropdown__arrow');
    this.$options = this.$rootElement.find('.js-item-quantity-dropdown__options');
    this._handleSelectClick = this._handleSelectClick.bind(this);
    this._initEventListeners = this._initEventListeners.bind(this);
    this._initEventListeners();
    this._createOptions(options);
    this._createClearAndApplyButtons();
  }

  _handleSelectClick() {
    this.$select.toggleClass('item-quantity-dropdown__select_expanded');
    this.$arrow.toggleClass('item-quantity-dropdown__arrow_expanded');
    this.$options.toggleClass('item-quantity-dropdown__options_expanded');
  }

  _initEventListeners() {
    this.$select.on('click', this._handleSelectClick);
  }

  _createOptions(optionsData) {
    optionsData.options.forEach((item) => {
      const $newOption = $('<div class="item-quantity-dropdown__option"></div>');
      const $newOptionName = $(`<div class="item-quantity-dropdown__option-name">${item.name}</div>'`);
      const $newCounterContainer = $('<div class="item-quantity-dropdown__counter-container"></div>');
      const $newCounter = new Counter({
        initialCount: 0,
        decrementClasses: 'item-quantity-dropdown__decrement item-quantity-dropdown__decrement_disabled',
        counterClasses: 'item-quantity-dropdown__counter',
        incrementClasses: 'item-quantity-dropdown__increment',
      });

      $newCounterContainer.append($newCounter.getDecrementElement());
      $newCounterContainer.append($newCounter.getCounterElement());
      $newCounterContainer.append($newCounter.getIncrementElement());
      $newOption.append($newOptionName);
      $newOption.append($newCounterContainer);
      this.$options.append($newOption);
    });
  }

  _createClearAndApplyButtons() {
    const $clearAndApplyButtonsContainer = $('<div class="item-quantity-dropdown__clear-and-apply-buttons-container"></div>');
    const $clearButton = $('<div class="item-quantity-dropdown__clear item-quantity-dropdown__clear_disabled">Очистить</div>');
    const $applyButton = $('<div class="item-quantity-dropdown__apply">Применить</div>');

    $clearAndApplyButtonsContainer.append($clearButton);
    $clearAndApplyButtonsContainer.append($applyButton);
    this.$options.append($clearAndApplyButtonsContainer);
  }
}

// Находим все элементы на странице с таким классом
const $rootElements = $('.js-item-quantity-dropdown');

// В цикле для каждого элемента создаём объект
$rootElements.each((index, node) => {
  new ItemQuantityDropdown($(node), optionsDataFromSomewhere);
});
