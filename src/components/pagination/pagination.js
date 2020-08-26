const optionsDataFromSomewhere = {
  currentPage: 1,
  totalPages: 15,
  paginationLengthLeft: 2,
  paginationLengthRight: 1,
  description: '1 – 12 из 100+ вариантов аренды',
};

class Pagination {
  constructor($rootElement, options) {
    this.$rootElement = $rootElement;
    this.$buttonsContaner = this.$rootElement.find('.js-pagination__buttons');
    this.currentPage = options.currentPage;
    this.totalPages = options.totalPages;
    this.paginationLengthLeft = options.paginationLengthLeft;
    this.paginationLengthRight = options.paginationLengthRight;
    this._addPagination();
    this._addDescription();
  }

  _addPagination() {
    let pageIndex = this.currentPage;
    const $paginationButtonsContainer = this.$buttonsContaner;

    // Добавлем первую кнопку
    const $newFirstButton = document.createElement('button');
    if (this.currentPage === 1) {
      $newFirstButton.classList.add('pagination__page-button', 'pagination__page-button_active');
      $newFirstButton.innerText = '1';
      pageIndex += 1;
    } else {
      $newFirstButton.classList.add('pagination__arrow-button');
      $newFirstButton.innerText = 'arrow_back';
    }
    $paginationButtonsContainer.append($newFirstButton);

    // Добавляем левую часть
    for (let lengthIndex = 0; lengthIndex < this.paginationLengthLeft; lengthIndex += 1) {
      // Если страницы закончились - досрочно выходим из цикла
      if (pageIndex + 1 > this.totalPages) {
        break;
      }
      const $newPageButton = document.createElement('button');
      $newPageButton.classList.add('pagination__page-button');
      $newPageButton.innerText = pageIndex;
      if (this.currentPage === pageIndex) {
        $newPageButton.classList.add('pagination__page-button_active');
      }
      $paginationButtonsContainer.append($newPageButton);
      pageIndex += 1;
    }

    // Если не все страницы будут отрисованы, то добавляем многоточие
    if (pageIndex + this.paginationLengthRight <= this.totalPages) {
      const $newRestButton = document.createElement('button');
      $newRestButton.classList.add('pagination__page-button');
      // Если всего лишь одна страница не влезла, то вместо многоточия пишем её номер
      if (pageIndex === this.totalPages - 1) {
        $newRestButton.innerText = pageIndex;
      } else {
        $newRestButton.innerText = '...';
      }
      $paginationButtonsContainer.append($newRestButton);
    }

    // Добавляем правую часть
    if (pageIndex <= this.totalPages) {
      // Начинаем отсчет с нужного номера страницы
      pageIndex = this.totalPages - this.paginationLengthRight + 1;
      for (let lengthIndex = 0; lengthIndex < this.paginationLengthRight; lengthIndex += 1) {
        // Если страницы закончились - досрочно выходим из цикла
        if (pageIndex > this.totalPages) {
          break;
        }
        const $newPageButton = document.createElement('button');
        $newPageButton.classList.add('pagination__page-button');
        $newPageButton.innerText = pageIndex;
        if (this.currentPage === pageIndex) {
          $newPageButton.classList.add('pagination__page-button_active');
        }
        $paginationButtonsContainer.append($newPageButton);
        pageIndex += 1;
      }
    }

    // Добавляем стрелку справа, если эта страница не последняя
    if (this.currentPage < this.totalPages) {
      const $newLastButton = $('<button class="pagination__arrow-button">arrow_forward</button>');
      $paginationButtonsContainer.append($newLastButton);
    }
  }

  _addDescription() {
    const descriptionText = optionsDataFromSomewhere.description;
    const $newDescription = document.createElement('p');
    $newDescription.classList.add('pagination__text');
    $newDescription.innerText = descriptionText;
    this.$rootElement.append($newDescription);
  }
}

const $rootElements = $('.js-pagination');

$rootElements.each((index, rootElement) => {
  new Pagination($(rootElement), optionsDataFromSomewhere);
});
