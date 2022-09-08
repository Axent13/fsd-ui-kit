const searchRoomData = {
  itemQuantityDropdownsData: [
    {
      placeholder: 'Сколько гостей',
      hasClearAndApplyButtons: true,
      maxTextLength: 40,
      options: [
        {
          optionsNames: ['взрослые', 'дети'],
          form1: 'гость',
          form2: 'гостя',
          form5: 'гостей',
        },
        {
          optionsNames: ['младенцы'],
          form1: 'младенец',
          form2: 'младенца',
          form5: 'младенцев',
        },
      ],
    },
    {
      placeholder: 'Удобства номера',
      hasClearAndApplyButtons: false,
      maxTextLength: 25,
      options: [
        {
          optionsNames: ['спальни'],
          form1: 'спальня',
          form2: 'спальни',
          form5: 'спален',
        },
        {
          optionsNames: ['кровати'],
          form1: 'кровать',
          form2: 'кровати',
          form5: 'кроватей',
        },
        {
          optionsNames: ['ванные комнаты'],
          form1: 'ванная комната',
          form2: 'ванных комнаты',
          form5: 'ванных комнат',
        },
      ],
    },
  ],
  roomCardsData: [
    {
      roomName: '888',
      isLuxury: true,
      dailyPrice: 9990,
    },
    {
      roomName: '840',
      isLuxury: false,
      dailyPrice: 9990,
    },
    {
      roomName: '980',
      isLuxury: true,
      dailyPrice: 8500,
    },
    {
      roomName: '856',
      isLuxury: false,
      dailyPrice: 7300,
    },
    {
      roomName: '740',
      isLuxury: false,
      dailyPrice: 6000,
    },
    {
      roomName: '982',
      isLuxury: false,
      dailyPrice: 5800,
    },
    {
      roomName: '678',
      isLuxury: false,
      dailyPrice: 5500,
    },
    {
      roomName: '450',
      isLuxury: false,
      dailyPrice: 5300,
    },
    {
      roomName: '350',
      isLuxury: false,
      dailyPrice: 5000,
    },
    {
      roomName: '666',
      isLuxury: false,
      dailyPrice: 5000,
    },
    {
      roomName: '444',
      isLuxury: false,
      dailyPrice: 5000,
    },
    {
      roomName: '352',
      isLuxury: false,
      dailyPrice: 5000,
    },
  ],
};

export default searchRoomData;
