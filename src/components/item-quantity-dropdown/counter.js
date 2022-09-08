class Counter {
  constructor(options = {}) {
    this.value = options.initialValue || 0;
    this.$decrement = $(`<button class="${options.decrementClasses}" type="button">-</button>`);
    this.$counter = $(`<div class="${options.counterClasses}">${this.value}</div>`);
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
    return this.value;
  }

  setNewCounterValue(newValue) {
    this.value = newValue;
    this.$counter.text(0);
    this.$decrement.addClass('item-quantity-dropdown__decrement_disabled');
  }

  _handleDecrementClick() {
    this.value = parseInt($(this.$counter).text(), 10);
    if (this.value > 0) {
      this.value -= 1;
      $(this.$counter).text(this.value);
    }
    if (this.value === 0) {
      this.$decrement.addClass('item-quantity-dropdown__decrement_disabled');
    }
  }

  _handleIncrementClick() {
    this.value = parseInt($(this.$counter).text(), 10) + 1;
    $(this.$counter).text(this.value);
    if (this.value > 0) {
      this.$decrement.removeClass('item-quantity-dropdown__decrement_disabled');
    }
  }

  _initEventListeners() {
    this.$decrement.on('click', this._handleDecrementClick.bind(this));
    this.$increment.on('click', this._handleIncrementClick.bind(this));
  }
}

export default Counter;
