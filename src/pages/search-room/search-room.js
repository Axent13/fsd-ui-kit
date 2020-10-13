import ItemQuantityDropdown from '../../components/item-quantity-dropdown/item-quantity-dropdown';
import ItemQuantityDropdownsData from './search-room-data';

const $searchRoomRootElement = $('.js-search-room');
const $itemQuantityDropdownElements = $searchRoomRootElement.find('.js-item-quantity-dropdown');

$itemQuantityDropdownElements.each((index, node) => {
  new ItemQuantityDropdown($(node), ItemQuantityDropdownsData[index]);
});
