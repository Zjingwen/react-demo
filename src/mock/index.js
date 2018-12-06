const delay = require('mocker-api/utils/delay');

const proxy = {
  'GET /api/user': {
    id: 1,
    username: 'kenny111',
    sex: 6
  },
}
module.exports = delay(proxy, 200);