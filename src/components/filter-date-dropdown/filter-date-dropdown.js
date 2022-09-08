import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class FilterDateDropdown {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-filter-date-dropdown__air-datepicker');
    this.$arrow = this.$rootElement.find('.js-date-dropdown__arrow');
    new AirDatepicker(this.$airDatepicker, {
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
