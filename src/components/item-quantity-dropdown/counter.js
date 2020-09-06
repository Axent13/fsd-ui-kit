class Counter {
  constructor(options = {}) {
    this.count = options.initialCount || 0;
    this.$decrement = $(`<button class="${options.decrementClasses}" type="button">-</button>`);
    this.$counter = $(`<div class="${options.counterClasses}">${this.count}</div>`);
    this.$increment = $(`<button class="${options.incrementClasses}" type="button">+</button>`);
    this._initEventListeners();
  }

  getDecrementElement() {
    return this.$decrement;
  }

  getCounterElement() {
    return this.$counter;
  }

  getIncrementElement() {
    return this.$increment;
  }

  getCounterValue() {
    return this.count;
  }

  _handleDecrementClick() {
    this.count = parseInt($(this.$counter).text(), 10);
    if (this.count > 0) {
      this.count -= 1;
      $(this.$counter).text(this.count);
    }
    if (this.count === 0) {
      this.$decrement.addClass('item-quantity-dropdown__decrement_disabled');
    }
  }

  _handleIncrementClick() {
    this.count = parseInt($(this.$counter).text(), 10) + 1;
    $(this.$counter).text(this.count);
    if (this.count > 0) {
      this.$decrement.removeClass('item-quantity-dropdown__decrement_disabled');
    }
  }

  _initEventListeners() {
    this.$decrement.on('click', this._handleDecrementClick.bind(this));
    this.$increment.on('click', this._handleIncrementClick.bind(this));
  }
}

export default Counter;
