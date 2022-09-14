i = 0;
let pToggle = [];

function toggle(posibilidades) {
  const p = posibilidades;

  return function posibilidades() {
    if (p === pToggle) {
      i = i + 1;
      if (p.lenght === 1) {
        i = 0;
        return p[i];
      } else if (i > p.length) {
        i = 1;
        return p[i - 1];
      }
      return p[i - 1];
    } else {
      pToggle = p;
      i = 1;
      return p[i - 1];
    }
  };
}

const hello = toggle(["hello"]);
const onOff = toggle(["on", "off"]);
let speed = toggle(["slow", "medium", "fast"]);

console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"

console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
