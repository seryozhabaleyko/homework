'use strict';

import View from './ClockViewCanvas.js';
import ViewSVG from './ClockViewSVG.js';
import Model from './Clock.js';
import Controller from './ClockControllerButtons.js';

function Watch() {
  const view = new View();
  const controller = new Controller();
  const model = new Model(view, controller);
}

Watch();
Watch();

function clock() {
  const view = new ViewSVG();
  const controller = new Controller();
  const model = new Model(view, controller);
}

clock();
clock();