import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

class FilterDateDropdown {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-filter-date-dropdown__air-datepicker');
    this.$arrow = this.$rootElement.find('.js-date-dropdown__arrow');
    this.$airDatepicker.datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'd M',
    });
  }
}

const $rootElements = $('.js-filter-date-dropdown');

$rootElements.each((index, node) => {
  new FilterDateDropdown($(node));
});
