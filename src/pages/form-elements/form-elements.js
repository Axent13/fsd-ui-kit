import ItemQuantityDropdown from '../../components/item-quantity-dropdown/item-quantity-dropdown';
import ItemQuantityDropdownsData from './form-elements-data';

const $formElementsRootElement = $('.js-form-elements');
const $itemQuantityDropdownElements = $formElementsRootElement.find('.js-item-quantity-dropdown');

$itemQuantityDropdownElements.each((index, node) => {
  new ItemQuantityDropdown($(node), ItemQuantityDropdownsData[index]);
});
