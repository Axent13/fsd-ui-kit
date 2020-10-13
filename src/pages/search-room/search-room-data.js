const itemQuantityDropdownsData = [
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
];

export default itemQuantityDropdownsData;
