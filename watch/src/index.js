'use strict';

import View from './ClockViewCanvas.js';
import ViewSVG from './ClockViewSVG.js';
import Model from './Clock.js';
import Controller from './ClockControllerButtons.js';

function Watch() {
  const view = new View();
  const model = new Model(view);
  const controller = new Controller(view, model);
}

Watch();
