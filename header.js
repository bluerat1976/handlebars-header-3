debugger;

import headerTemplate from './header.hbs';
import header from './headerData';
import prepareHeader from './headerHelpers';

var headerElement = document.getElementById('header').innerHTML;
Handlebars.compile(headerElement);


if (headerElement) {
  headerElement.innerHTML = headerTemplate({ header: prepareHeader(header) });
}