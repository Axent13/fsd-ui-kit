import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

class DateDropdown {
  constructor($rootElement, options = {}) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-date-dropdown__air-datepicker');
    this.$airDatepicker.datepicker(options);

    this.$datepickersContainer = $('.datepickers-container');
    this.$currentDatepiker = this.$datepickersContainer.find('.datepicker:last');
    this.$prevButton = this.$currentDatepiker.find('.datepicker--nav-action[data-action="prev"]');
    this.$nextButton = this.$currentDatepiker.find('.datepicker--nav-action[data-action="next"]');

    this.$prevButton.text('arrow_back');
    this.$nextButton.text('arrow_forward');

    this.$buttonsContainer = this.$currentDatepiker.find('.datepicker--buttons');
    this.$applyButton = $('<span class="datepicker--button datepicker--apply-button">Применить</span>');
    this.$buttonsContainer.append(this.$applyButton);
  }
}

export default DateDropdown;
