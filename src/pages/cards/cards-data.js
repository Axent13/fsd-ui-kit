const cardsData = {
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
  ],
  bookingData: [
    {
      placeholder: 'Сколько гостей',
      hasClearAndApplyButtons: false,
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
      placeholder: 'Сколько гостей',
      hasClearAndApplyButtons: false,
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
  ]
};

export default cardsData;
