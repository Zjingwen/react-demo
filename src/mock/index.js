const Delay = require('mocker-api/utils/delay');
const User = require('./User');

const proxy = {
  ...User,
};

module.exports = Delay(proxy, 200);