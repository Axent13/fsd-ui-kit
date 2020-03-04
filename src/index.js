import _ from 'lodash';
import './style.scss';
import './fonts.scss';

function component(className) {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', className], ' ');
    element.classList.add(className);
  
    return element;
  }
  
document.body.appendChild(component('quicksand'));
document.body.appendChild(component('montserrat-regular'));
document.body.appendChild(component('montserrat-bold'));