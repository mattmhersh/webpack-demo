import '../bower_components/bootstrap/dist/css/bootstrap.css';

import _ from 'lodash';

import 'jquery';

import '../bower_components/bootstrap/dist/js/bootstrap.js';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

//document.body.appendChild(component());
