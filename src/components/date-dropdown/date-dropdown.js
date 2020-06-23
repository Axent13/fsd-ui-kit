import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

const $dateDropdown = $('.js-date-dropdown');
const $airDatepicker = $('.js-date-dropdown__air-datepicker');

$airDatepicker.datepicker();

$dateDropdown.innerHTML = $airDatepicker.data('datepicker').currentDate;
