import Counter from './counter';

const optionsDataFromSomewhere = [
  {
    placeholder: 'Сколько гостей',
    hasClearAndApplyButtons: false,
    maxTextLength: 40,
    options: [
      {
        optionsNames: ['взрослые', 'дети'],
        form1: 'гость',
        form2: 'гостя',
        form5: 'гостей',
      },
      {
        optionsNames: ['младенцы'],
        form1: 'младенец',
        form2: 'младенца',
        form5: 'младенцев',
      },
    ],
  },
  {
    placeholder: 'Удобства номера',
    hasClearAndApplyButtons: false,
    maxTextLength: 25,
    options: [
      {
        optionsNames: ['спальни'],
        form1: 'спальня',
        form2: 'спальни',
        form5: 'спален',
      },
      {
        optionsNames: ['кровати'],
        form1: 'кровать',
        form2: 'кровати',
        form5: 'кроватей',
      },
      {
        optionsNames: ['ванные комнаты'],
        form1: 'ванная комната',
        form2: 'ванных комнаты',
        form5: 'ванных комнат',
      },
    ],
  },
  {
    placeholder: 'Удобства номера',
    hasClearAndApplyButtons: false,
    maxTextLength: 25,
    options: [
      {
        optionsNames: ['спальни'],
        form1: 'спальня',
        form2: 'спальни',
        form5: 'спален',
      },
      {
        optionsNames: ['кровати'],
        form1: 'кровать',
        form2: 'кровати',
        form5: 'кроватей',
      },
      {
        optionsNames: ['ванные комнаты'],
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
        optionsNames: ['взрослые', 'дети'],
        form1: 'гость',
        form2: 'гостя',
        form5: 'гостей',
      },
      {
        optionsNames: ['младенцы'],
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
        optionsNames: ['взрослые', 'дети'],
        form1: 'гость',
        form2: 'гостя',
        form5: 'гостей',
      },
      {
        optionsNames: ['младенцы'],
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
    if (this.options.hasClearAndApplyButtons) {
      this._createClearAndApplyButtons();
    }

    this._handleSelectAndArrowClick = this._handleSelectAndArrowClick.bind(this);
    this._handleApplyButtonAndCountersClick = this._handleApplyButtonAndCountersClick.bind(this);
    this._handleApplyButtonClick = this._handleApplyButtonClick.bind(this);
    this._handleClearButtonClick = this._handleClearButtonClick.bind(this);
    this._initEventListeners = this._initEventListeners.bind(this);
    this._initEventListeners();
    this._handleOutsideClick();
  }

  _handleSelectAndArrowClick() {
    this.$select.toggleClass('item-quantity-dropdown__select_expanded');
    this.$arrow.toggleClass('item-quantity-dropdown__arrow_expanded');
    this.$options.toggleClass('item-quantity-dropdown__options_expanded');
  }

  _handleApplyButtonAndCountersClick() {
    let resultText = '';
    let counterIndex = 0;

    this.options.options.forEach((item) => {
      let currentOptionValue = 0;
      item.optionsNames.forEach(() => {
        currentOptionValue += this.counters[counterIndex].getCounterValue();
        counterIndex += 1;
      });

      if (currentOptionValue !== 0) {
        const optionName = ItemQuantityDropdown.pluralForm(
          currentOptionValue,
          item.form1,
          item.form2,
          item.form5,
        );

        resultText += `${currentOptionValue}  ${optionName}, `;
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
      $(this.$select).text(this.options.placeholder);
      if (this.options.hasClearAndApplyButtons) {
        $(this.$clearButton.addClass('item-quantity-dropdown__clear_disabled'));
      }
    } else {
      $(this.$select).text(resultText);
      if (this.options.hasClearAndApplyButtons) {
        $(this.$clearButton.removeClass('item-quantity-dropdown__clear_disabled'));
      }
    }
  }

  _handleClearButtonClick() {
    this.counters.forEach((currentCounter) => {
      currentCounter.setNewCounterValue(0);
      $(this.$select).text(this.options.placeholder);
    });
  }

  _handleOutsideClick() {
    $(document).mouseup((e) => {
      const isThisSelectOrArrow = this.$select.is(e.target) || this.$arrow.is(e.target);
      if (!isThisSelectOrArrow && this.$rootElement.has(e.target).length === 0) {
        this.$select.removeClass('item-quantity-dropdown__select_expanded');
        this.$arrow.removeClass('item-quantity-dropdown__arrow_expanded');
        this.$options.removeClass('item-quantity-dropdown__options_expanded');
      }
    });
  }

  _handleApplyButtonClick() {
    this.$select.removeClass('item-quantity-dropdown__select_expanded');
    this.$arrow.removeClass('item-quantity-dropdown__arrow_expanded');
    this.$options.removeClass('item-quantity-dropdown__options_expanded');
  }

  _initEventListeners() {
    this.$select.on('click', this._handleSelectAndArrowClick);
    this.$arrow.on('click', this._handleSelectAndArrowClick);
    if (this.options.hasClearAndApplyButtons) {
      this.$applyButton.on('click', this._handleApplyButtonAndCountersClick);
      this.$applyButton.on('click', this._handleApplyButtonClick);
      this.$clearButton.on('click', this._handleClearButtonClick);
    }

    this.counters.forEach((currentCounter) => {
      $(currentCounter.getIncrementElement()).on('click', this._handleApplyButtonAndCountersClick);
      $(currentCounter.getDecrementElement()).on('click', this._handleApplyButtonAndCountersClick);
    });
  }

  static pluralForm(qauntity, form1, form2, form5) {
    const reminderOfTheHundred = Math.abs(qauntity) % 100;
    const reminderOfTheTen = reminderOfTheHundred % 10;
    if (reminderOfTheHundred > 10 && reminderOfTheHundred < 20) return form5;
    if (reminderOfTheTen > 1 && reminderOfTheTen < 5) return form2;
    if (reminderOfTheTen === 1) return form1;
    return form5;
  }

  _createOptions(optionsData) {
    optionsData.options.forEach((item) => {
      item.optionsNames.forEach((option) => {
        const $newOption = $('<div class="item-quantity-dropdown__option"></div>');
        const $newOptionName = $(`<div class="item-quantity-dropdown__option-name">${option}</div>'`);
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
    });
  }

  _createClearAndApplyButtons() {
    this.$clearAndApplyButtonsContainer = $('<div class="item-quantity-dropdown__clear-and-apply-buttons-container"></div>');
    this.$clearButton = $('<div class="item-quantity-dropdown__clear item-quantity-dropdown__clear_disabled">Очистить</div>');
    this.$applyButton = $('<div class="item-quantity-dropdown__apply">Применить</div>');
    this.$clearAndApplyButtonsContainer.append(this.$clearButton);
    this.$clearAndApplyButtonsContainer.append(this.$applyButton);
    this.$options.append(this.$clearAndApplyButtonsContainer);
  }
}

// Находим все элементы на странице с таким классом
const $rootElements = $('.js-item-quantity-dropdown');

// В цикле для каждого элемента создаём объект
$rootElements.each((index, node) => {
  new ItemQuantityDropdown($(node), optionsDataFromSomewhere[index]);
});
