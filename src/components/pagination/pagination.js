const dataFromSomewhere = {
  currentPage: 1,
  totalPages: 15,
  paginationLength: 6,
};

const { currentPage } = dataFromSomewhere;
const { totalPages } = dataFromSomewhere;
const { paginationLength } = dataFromSomewhere;
// const $paginationRootElement = document.querySelector('.pagination');
const $paginationButtonsContainer = document.querySelector('.pagination__buttons');
let pageIndex = 0;

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
$paginationButtonsContainer.appendChild($newFirstButton);

// Добавляем промежуточные кнопки
for (; pageIndex < paginationLength - 2; pageIndex += 1) {
  const $newPageButton = document.createElement('button');

  $newPageButton.classList.add('pagination__page-button');
  $newPageButton.innerText = currentPage + pageIndex;
  if (currentPage === pageIndex) {
    $newPageButton.classList.add('pagination__page-button_active');
  }
  $paginationButtonsContainer.appendChild($newPageButton);
}

// Добавляем последнюю кнопку
const $newLastButton = document.createElement('button');
if (currentPage === totalPages) {
  $newLastButton.classList.add('pagination__page-button', 'pagination__page-button_active');
  $newLastButton.innerText = totalPages;
} else {
  $newLastButton.classList.add('pagination__arrow-button');
  $newLastButton.innerText = '->';
}
$paginationButtonsContainer.appendChild($newLastButton);
