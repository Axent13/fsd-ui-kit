class LikeButton {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$button = this.$rootElement.find('.js-like-button__button');
    this.$counter = this.$rootElement.find('.js-like-button__counter');
    this.counterValue = parseInt(this.$counter.text(), 10) || 0;
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this);
    this._initEventListeners = this._initEventListeners.bind(this);
    this._initEventListeners();
  }

  _handleLikeButtonClick() {
    if (this.$rootElement.hasClass('like-button_liked')) {
      this.counterValue -= 1;
      this.$button.text('favorite_border');
    } else {
      this.counterValue += 1;
      this.$button.text('favorite');
    }
    this.$rootElement.toggleClass('like-button_liked');
    this.$button.toggleClass('like-button__button_liked');
    this.$counter.toggleClass('like-button__counter_liked');
    this.$counter.text(this.counterValue);
  }

  _initEventListeners() {
    this.$rootElement.on('click', this._handleLikeButtonClick);
  }
}

const $rootElements = $('.js-like-button');

$rootElements.each((index, node) => {
  new LikeButton($(node));
});
