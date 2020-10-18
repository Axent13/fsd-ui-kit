import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';
import DateDropdown from '../../components/date-dropdown/date-dropdown';

const $cardsRootElement = $('.js-cards');
const $dateDropdownElements = $cardsRootElement.find('.js-date-dropdown');
const $inlineDropdownElement = $cardsRootElement.find('.js-cards__datepicker-container');
const inlineDateDropdown = new DateDropdown($inlineDropdownElement, {
  inline: true,
});
console.log(inlineDateDropdown);

$dateDropdownElements.each((index, node) => {
  new DateDropdown($(node), {
    minDate: new Date(),
    range: true,
    clearButton: true,
    navTitles: {
      days: 'MM <i>yyyy</i>',
    },
  });
});
