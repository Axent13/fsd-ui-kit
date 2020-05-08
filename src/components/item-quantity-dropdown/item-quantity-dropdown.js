const options = {
  placeholder: 'Сколько гостей',
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

function pluralForm(qauntity, form1, form2, form5) {
  const reminderOfTheHundred = Math.abs(qauntity) % 100;
  const reminderOfTheTen = reminderOfTheHundred % 10;
  if (reminderOfTheHundred > 10 && reminderOfTheHundred < 20) return form5;
  if (reminderOfTheTen > 1 && reminderOfTheTen < 5) return form2;
  if (reminderOfTheTen === 1) return form1;
  return form5;
}

const $select = $('.js-item-quantity-dropdown__select');
const $optionsContainer = $('.js-item-quantity-dropdown__options-container');

function handleSelectClick() {
  $optionsContainer.toggleClass('item-quantity-dropdown__options-container_opened');
}

function initEventListeners() {
  $select.on('click', handleSelectClick);
}

initEventListeners();

const test = options.options[0];
console.log(pluralForm(111122, test.form1, test.form2, test.form5));
