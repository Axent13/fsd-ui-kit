import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class FilterDateDropdown {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$arrow = this.$rootElement.find('.js-date-dropdown__arrow');
    this.$airDatepickers = document.querySelectorAll('.js-filter-date-dropdown__air-datepicker');
    this.$airDatepickers.forEach(airDatepicker => {
      return new AirDatepicker(airDatepicker, {
        range: true,
        multipleDatesSeparator: ' - ',
        dateFormat: 'd M',
      });
    });
  }
}

const $rootElements = $('.js-filter-date-dropdown');

$rootElements.each((index, node) => {
  new FilterDateDropdown($(node));
});
