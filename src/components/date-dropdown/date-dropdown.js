import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

class DateDropdown {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-date-dropdown__air-datepicker');
    this.$airDatepicker.datepicker();
  }
}

const $rootElements = $('.js-date-dropdown');

$rootElements.each((index, node) => {
  new DateDropdown($(node));
});
