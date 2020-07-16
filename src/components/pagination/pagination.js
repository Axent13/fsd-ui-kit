const dataFromSomewhere = {
  currentPage: 1,
  totalPages: 15,
  paginationLengthLeft: 2,
  paginationLengthRight: 1,
};

function drawPagination(options) {
  const { currentPage } = options;
  let pageIndex = currentPage;
  const { totalPages } = options;
  const { paginationLengthLeft } = options;
  const { paginationLengthRight } = options;
  const $paginationButtonsContainer = $('.pagination__buttons');

  // Добавлем первую кнопку
  const $newFirstButton = document.createElement('button');
  if (currentPage === 1) {
    $newFirstButton.classList.add('pagination__page-button', 'pagination__page-button_active');
    $newFirstButton.innerText = '1';
    pageIndex += 1;
  } else {
    $newFirstButton.classList.add('pagination__arrow-button');
    $newFirstButton.innerText = '<-';
  }
  $paginationButtonsContainer.append($newFirstButton);

  // Добавляем левую часть
  for (let lengthIndex = 0; lengthIndex < paginationLengthLeft; lengthIndex += 1) {
    // Если страницы закончились - досрочно выходим из цикла
    if (pageIndex + 1 > totalPages) {
      break;
    }
    const $newPageButton = document.createElement('button');
    $newPageButton.classList.add('pagination__page-button');
    $newPageButton.innerText = pageIndex;
    if (currentPage === pageIndex) {
      $newPageButton.classList.add('pagination__page-button_active');
    }
    $paginationButtonsContainer.append($newPageButton);
    pageIndex += 1;
  }

  // Если не все страницы будут отрисованы, то добавляем многоточие
  if (pageIndex + paginationLengthRight <= totalPages) {
    const $newRestButton = document.createElement('button');
    $newRestButton.classList.add('pagination__page-button');
    // Если всего лишь одна страница не влезла, то вместо многоточия пишем её номер
    if (pageIndex === totalPages - 1) {
      $newRestButton.innerText = pageIndex;
    } else {
      $newRestButton.innerText = '...';
    }
    $paginationButtonsContainer.append($newRestButton);
  }

  // Добавляем правую часть
  if (pageIndex <= totalPages) {
    // Начинаем отсчет с нужного номера страницы
    pageIndex = totalPages - paginationLengthRight + 1;
    for (let lengthIndex = 0; lengthIndex < paginationLengthRight; lengthIndex += 1) {
      // Если страницы закончились - досрочно выходим из цикла
      if (pageIndex > totalPages) {
        break;
      }
      const $newPageButton = document.createElement('button');
      $newPageButton.classList.add('pagination__page-button');
      $newPageButton.innerText = pageIndex;
      if (currentPage === pageIndex) {
        $newPageButton.classList.add('pagination__page-button_active');
      }
      $paginationButtonsContainer.append($newPageButton);
      pageIndex += 1;
    }
  }

  // Добавляем стрелку справа, если эта страница не последняя
  if (currentPage < totalPages) {
    const $newLastButton = document.createElement('button');
    $newLastButton.classList.add('pagination__arrow-button');
    $newLastButton.innerText = '->';
    $paginationButtonsContainer.append($newLastButton);
  }
}

drawPagination(dataFromSomewhere);
