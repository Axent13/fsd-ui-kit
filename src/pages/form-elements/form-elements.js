import ItemQuantityDropdown from '../../components/item-quantity-dropdown/item-quantity-dropdown';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import ItemQuantityDropdownsData from './form-elements-data';

const $formElementsRootElement = $('.js-form-elements');
const $itemQuantityDropdownElements = $formElementsRootElement.find('.js-item-quantity-dropdown');
const $dateDropdownElements = $formElementsRootElement.find('.js-date-dropdown');

$itemQuantityDropdownElements.each((index, node) => {
  new ItemQuantityDropdown($(node), ItemQuantityDropdownsData[index]);
});

$dateDropdownElements.each((index, node) => {
  new DateDropdown($(node));
});
