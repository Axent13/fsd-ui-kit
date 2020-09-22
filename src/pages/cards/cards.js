import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

class CardsDatepicker {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-cards__datepicker');
    this.$airDatepicker.datepicker({
      minDate: new Date(),
      range: true,
      clearButton: true,
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
    });

    this.$prevButton = this.$rootElement.find('.datepicker--nav-action[data-action="prev"]');
    this.$nextButton = this.$rootElement.find('.datepicker--nav-action[data-action="next"]');

    this.$prevButton.text('arrow_back');
    this.$nextButton.text('arrow_forward');

    this.$buttonsContainer = this.$rootElement.find('.datepicker--buttons');
    this.$applyButton = $('<span class="datepicker--button datepicker--apply-button">Применить</span>');
    $(this.$buttonsContainer).append(this.$applyButton);
  }
}

const $rootElements = $('.js-cards__datepicker-container');

$rootElements.each((index, node) => {
  new CardsDatepicker($(node));
});
