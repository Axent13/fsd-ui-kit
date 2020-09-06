import Counter from './counter';

const optionsDataFromSomewhere = [
  {
    placeholder: 'Сколько гостей',
    hasClearAndApplyButtons: true,
    maxTextLength: 40,
    options: [
      {
        name: 'взрослые',
        form1: 'взрослый',
        form2: 'взрослых',
        form5: 'взрослых',
      },
      {
        name: 'дети',
        form1: 'ребенок',
        form2: 'ребенка',
        form5: 'детей',
      },
      {
        name: 'младенцы',
        form1: 'младенец',
        form2: 'младенца',
        form5: 'младенцев',
      },
    ],
  },
  {
    placeholder: 'Удобства номера',
    hasClearAndApplyButtons: true,
    maxTextLength: 25,
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
  },
  {
    placeholder: 'Удобства номера',
    hasClearAndApplyButtons: true,
    maxTextLength: 25,
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
  },
  {
    placeholder: 'Сколько гостей',
    hasClearAndApplyButtons: true,
    maxTextLength: 40,
    options: [
      {
        name: 'взрослые',
        form1: 'взрослый',
        form2: 'взрослых',
        form5: 'взрослых',
      },
      {
        name: 'дети',
        form1: 'ребенок',
        form2: 'ребенка',
        form5: 'детей',
      },
      {
        name: 'младенцы',
        form1: 'младенец',
        form2: 'младенца',
        form5: 'младенцев',
      },
    ],
  },
  {
    placeholder: 'Сколько гостей',
    hasClearAndApplyButtons: true,
    maxTextLength: 40,
    options: [
      {
        name: 'взрослые',
        form1: 'взрослый',
        form2: 'взрослых',
        form5: 'взрослых',
      },
      {
        name: 'дети',
        form1: 'ребенок',
        form2: 'ребенка',
        form5: 'детей',
      },
      {
        name: 'младенцы',
        form1: 'младенец',
        form2: 'младенца',
        form5: 'младенцев',
      },
    ],
  },
];

class ItemQuantityDropdown {
  constructor($rootElement, options = {}) {
    this.options = options;
    this.maxTextLength = this.options.maxTextLength || 25;
    this.counters = [];
    this.$rootElement = $rootElement;
    this.$select = this.$rootElement.find('.js-item-quantity-dropdown__select');
    this.$arrow = this.$rootElement.find('.js-item-quantity-dropdown__arrow');
    this.$options = this.$rootElement.find('.js-item-quantity-dropdown__options');

    this._createOptions(options);
    this.$clearAndApplyButtonsContainer = $('<div class="item-quantity-dropdown__clear-and-apply-buttons-container"></div>');
    this.$clearButton = $('<div class="item-quantity-dropdown__clear item-quantity-dropdown__clear_disabled">Очистить</div>');
    this.$applyButton = $('<div class="item-quantity-dropdown__apply">Применить</div>');
    this.$clearAndApplyButtonsContainer.append(this.$clearButton);
    this.$clearAndApplyButtonsContainer.append(this.$applyButton);
    this.$options.append(this.$clearAndApplyButtonsContainer);

    this._handleSelectClick = this._handleSelectClick.bind(this);
    this._handleApllyButtonClick = this._handleApllyButtonClick.bind(this);
    this._initEventListeners = this._initEventListeners.bind(this);
    this._initEventListeners();
  }

  _handleSelectClick() {
    this.$select.toggleClass('item-quantity-dropdown__select_expanded');
    this.$arrow.toggleClass('item-quantity-dropdown__arrow_expanded');
    this.$options.toggleClass('item-quantity-dropdown__options_expanded');
  }

  _handleApllyButtonClick() {
    const values = [];
    let resultText = '';
    this.counters.forEach((currentCounter) => {
      values.push(currentCounter.getCounterValue());
    });

    this.options.options.forEach((option, index) => {
      if (values[index] !== 0) {
        const optionName = ItemQuantityDropdown.pluralForm(
          values[index],
          option.form1,
          option.form2,
          option.form5,
        );

        resultText += `${values[index]}  ${optionName}, `;
      }
    });
    // убираю лишние символы "пробела" и "запятой" после последнего элемента
    resultText = resultText.slice(0, -2);
    // обрезаю текст, при превышении максимальной длины текста
    if (resultText.length > this.maxTextLength) {
      resultText = resultText.slice(0, this.maxTextLength - 3);
      resultText += '...';
    }
    // но если везде был указан 0 - возвращаю placeholder
    if (resultText === '') {
      resultText = this.options.placeholder;
    }

    $(this.$select).text(resultText);
  }

  static pluralForm(qauntity, form1, form2, form5) {
    const reminderOfTheHundred = Math.abs(qauntity) % 100;
    const reminderOfTheTen = reminderOfTheHundred % 10;
    if (reminderOfTheHundred > 10 && reminderOfTheHundred < 20) return form5;
    if (reminderOfTheTen > 1 && reminderOfTheTen < 5) return form2;
    if (reminderOfTheTen === 1) return form1;
    return form5;
  }

  _initEventListeners() {
    this.$select.on('click', this._handleSelectClick);
    this.$applyButton.on('click', this._handleApllyButtonClick);
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
      this.counters.push($newCounter);

      $newCounterContainer.append($newCounter.getDecrementElement());
      $newCounterContainer.append($newCounter.getCounterElement());
      $newCounterContainer.append($newCounter.getIncrementElement());
      $newOption.append($newOptionName);
      $newOption.append($newCounterContainer);
      this.$options.append($newOption);
    });
  }
}

// Находим все элементы на странице с таким классом
const $rootElements = $('.js-item-quantity-dropdown');

// В цикле для каждого элемента создаём объект
$rootElements.each((index, node) => {
  new ItemQuantityDropdown($(node), optionsDataFromSomewhere[index]);
});
