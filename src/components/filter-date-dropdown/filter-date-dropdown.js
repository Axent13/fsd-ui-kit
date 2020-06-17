import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

const $dateDropdown = $('.js-filter-date-dropdown');
const $airDatepicker = $('.js-filter-date-dropdown__air-datepicker');

$airDatepicker.datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  dateFormat: 'd M',
});
console.log($airDatepicker.data('datepicker'));

$dateDropdown.innerHTML = $airDatepicker.data('datepicker').currentDate;
console.log($airDatepicker.data('datepicker').currentDate);
