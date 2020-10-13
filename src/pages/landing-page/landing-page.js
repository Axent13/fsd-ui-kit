import ItemQuantityDropdown from '../../components/item-quantity-dropdown/item-quantity-dropdown';
import ItemQuantityDropdownsData from './landing-page-data';

const $landingPageRootElement = $('.js-landing-page');
const $itemQuantityDropdownElements = $landingPageRootElement.find('.js-item-quantity-dropdown');

$itemQuantityDropdownElements.each((index, node) => {
  new ItemQuantityDropdown($(node), ItemQuantityDropdownsData[index]);
});
