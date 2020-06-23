import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

const $dateDropdown = $('.js-filter-date-dropdown');
const $airDatepicker = $('.js-filter-date-dropdown__air-datepicker');

$airDatepicker.datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  dateFormat: 'd M',
});

$dateDropdown.innerHTML = $airDatepicker.data('datepicker').currentDate;
