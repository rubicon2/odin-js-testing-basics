function lerp(min, max, t) {
  return min + (max - min) * t;
}

function inverseLerp(min, max, value) {
  return (value - min) / (max - min);
}

function loopNumber(min, max, value) {
  // "Normalize" position for lerp so it is always between min and max,
  // and loops around by the appropriate amount as per above.
  let t = inverseLerp(min, max, value);
  t = (1 + (t % 1)) % 1;
  return lerp(min, max, t);
}

function loopInt(min, max, value) {
  return Math.round(loopNumber(min, max, value));
}

module.exports = loopInt;
