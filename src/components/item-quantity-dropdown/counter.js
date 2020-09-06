class Counter {
  constructor(options = {}) {
    this.count = options.initialCount || 0;
    this.$decrement = $(`<button class="${options.decrementClasses}" type="button">-</button>`);
    this.$counter = $(`<div class="${options.counterClasses}">${this.count}</div>`);
    this.$increment = $(`<button class="${options.incrementClasses}" type="button">+</button>`);
    this.initEventListeners();
  }

  handleDecrementClick() {
    this.count = parseInt($(this.$counter).text(), 10) - 1;
    if (this.count >= 0) {
      $(this.$counter).text(this.count);
    }
    if (this.count === 0) {
      this.$decrement.addClass('item-quantity-dropdown__decrement_disabled');
    }
  }

  handleIncrementClick() {
    this.count = parseInt($(this.$counter).text(), 10) + 1;
    $(this.$counter).text(this.count);
    if (this.count > 0) {
      this.$decrement.removeClass('item-quantity-dropdown__decrement_disabled');
    }
  }

  initEventListeners() {
    this.$decrement.on('click', this.handleDecrementClick.bind(this));
    this.$increment.on('click', this.handleIncrementClick.bind(this));
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
}

export default Counter;
