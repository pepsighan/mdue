const util = require('@mdi/util');

const meta = util.getMeta(true);

const find = /(\-\w)/g;
const convert = function (matches) {
  return matches[1].toUpperCase();
};

const lines = meta.map((icon) => {
  console.log(icon);
});
