import DateDropdown from '../../components/date-dropdown/date-dropdown';
import RoomCard from '../../components/room-card/room-card';
import cardsData from './cards-data';

$(document).ready(() => {
  const $cardsRootElement = $('.js-cards');
  const $dateDropdownElements = $cardsRootElement.find('.js-date-dropdown');
  const $roomCardsElements = $cardsRootElement.find('.js-cards__room-card-container');

  $dateDropdownElements.each((index, node) => {
    new DateDropdown($(node), {
      minDate: new Date(),
      range: true,
      clearButton: true,
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
    });
  });

  $roomCardsElements.each((index, node) => {
    new RoomCard($(node), cardsData.roomCardsData[index]);
  });
});
