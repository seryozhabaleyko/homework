'use strict';

const WATCH_WIDTH = 500;
const WATCH_HEIGHT = 500;
const WATCH_CX = WATCH_WIDTH / 2;
const WATCH_CY = WATCH_HEIGHT / 2;
const WATCH_RADIUS = (WATCH_WIDTH / 2) - 1;

function drawCircle(ctx, x, y, radius, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}

function drawText(ctx, x, y, text, color) {
  ctx.font = '40px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function drawLine(ctx, xfrom, yfrom, xto, yto, width, color) {
  ctx.beginPath();
  ctx.moveTo(xfrom, yfrom);
  ctx.lineTo(xto, yto);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.closePath();
  ctx.stroke();
}

function xfrom(index) {
  return WATCH_CX + (WATCH_RADIUS - WATCH_WIDTH / 10) * Math.sin((index * 30) * Math.PI / 180);
}

function yfrom(index) {
  return WATCH_CY - (WATCH_RADIUS - WATCH_HEIGHT / 10) * Math.cos((index * 30) * Math.PI / 180);
}

function xto(n, i, x, radius) {
  return x + radius * Math.sin(2 * Math.PI * n / i);
}

function yto(n, i, y, radius) {
  return y - radius * Math.cos(2 * Math.PI * n / i);
}

function getDate() {
  const date = new Date();

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function formaTime(time) {
  return time < 10 ? time = `0${time}` : time;
}

function watch() {
  const $canvas = document.getElementById('watch');
  $canvas.setAttribute('width', WATCH_WIDTH);
  $canvas.setAttribute('height', WATCH_HEIGHT);

  const ctx = $canvas.getContext('2d');

  const {hour, minute, second} = getDate();

  drawCircle(ctx, WATCH_CX, WATCH_CY, WATCH_RADIUS, 'gold');

  for (let i = 1; i < 13; i++) {
    drawCircle(ctx, xfrom(i), yfrom(i), 30, '#4caf50');
    drawText(ctx, xfrom(i), yfrom(i), i, 'black');
  }

  drawLine(
    ctx,
    WATCH_CX,
    WATCH_CY,
    xto(hour, 12, WATCH_CX, 150),
    yto(hour, 12, WATCH_CY, 150),
    10,
    '#333'
  );

  drawCircle(ctx, WATCH_CX, WATCH_CY, 8, '#333');

  drawLine(
    ctx,
    WATCH_CX,
    WATCH_CY,
    xto(minute, 60, WATCH_CX, 170),
    yto(minute, 60, WATCH_CY, 170),
    5,
    '#607d8b',
  );

  drawCircle(ctx, WATCH_CX, WATCH_CY, 6, '#607d8b');

  drawLine(
    ctx,
    WATCH_CX,
    WATCH_CY,
    xto(second, 60, WATCH_CX, 200),
    yto(second, 60, WATCH_CY, 200),
    3,
    'red',
  );

  drawCircle(ctx, WATCH_CX, WATCH_CY, 4, 'red');

  drawText(
    ctx,
    WATCH_CX,
    WATCH_CY - WATCH_HEIGHT / 5,
    `${hour}:${formaTime(minute)}:${formaTime(second)}`,
    'black',
  );

  window.requestAnimationFrame(watch);
}

window.requestAnimationFrame(watch);
