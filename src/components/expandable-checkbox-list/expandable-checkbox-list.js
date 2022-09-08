class ExpandableCheckboxList {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$spoiler = this.$rootElement.find('.js-expandable-checkbox-list__spoiler');
    this.$checkboxesContainer = this.$rootElement.find('.js-expandable-checkbox-list__checkboxes');
    this.$arrow = this.$rootElement.find('.js-expandable-checkbox-list__arrow');
    this._handleCheckboxContainerClick = this._handleCheckboxContainerClick.bind(this);
    this._initEventListeners = this._initEventListeners.bind(this);
    this._initEventListeners();
  }

  _handleCheckboxContainerClick() {
    this.$checkboxesContainer.toggleClass('expandable-checkbox-list__checkboxes_hidden');
    this.$arrow.toggleClass('expandable-checkbox-list__arrow_opened');
  }

  _initEventListeners() {
    this.$spoiler.on('click', this._handleCheckboxContainerClick);
  }
}

const $rootElements = $('.js-expandable-checkbox-list');

$rootElements.each((index, node) => {
  new ExpandableCheckboxList($(node));
});
