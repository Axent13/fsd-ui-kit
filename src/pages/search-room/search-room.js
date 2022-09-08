import ItemQuantityDropdown from '../../components/item-quantity-dropdown/item-quantity-dropdown';
import RoomCard from '../../components/room-card/room-card';
import searchRoomData from './search-room-data';

$(document).ready(() => {
  const $searchRoomRootElement = $('.js-search-room');
  const $itemQuantityDropdownElements = $searchRoomRootElement.find('.js-item-quantity-dropdown');
  const $roomCardsElements = $searchRoomRootElement.find('.js-search-room__room-card');

  $itemQuantityDropdownElements.each((index, node) => {
    new ItemQuantityDropdown($(node), searchRoomData.itemQuantityDropdownsData[index]);
  });

  $roomCardsElements.each((index, node) => {
    new RoomCard($(node), searchRoomData.roomCardsData[index]);
  });
});
