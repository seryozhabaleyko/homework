'use strict';

import View from './ClockViewCanvas.js';
import ViewSVG from './ClockViewSVG.js';
import Model from './Clock.js';
import Controller from './ClockControllerButtons.js';

function watch({ selector, timezone: tz }) {  
  const view = new View(selector, tz.string);
  const model = new Model(tz.number);
  const controller = new Controller(model, view);
}

watch({
  selector: document.getElementById('root'),
  timezone: {
    number: -5,
    string: 'Нью-Йорк (GMT-5)'
  }
});

watch({
  selector: document.getElementById('root'),
  timezone: {
    number: -1,
    string: 'Берлин (GMT-5)'
  }
});