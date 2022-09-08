import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class DateDropdown {
  constructor($rootElement, options = {}) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-date-dropdown__air-datepicker');
    new AirDatepicker(this.$airDatepicker, options);

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
