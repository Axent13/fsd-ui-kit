import Inputmask from 'inputmask';

class MaskedTextField {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$input = this.$rootElement.find('.js-masked-text-field__input');
    Inputmask('99.99.9999').mask(this.$input);
  }
}

const $rootElements = $('.js-masked-text-field');

$rootElements.each((index, node) => {
  new MaskedTextField($(node));
});
