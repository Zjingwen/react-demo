const delay = require('mocker-api/utils/delay');

const proxy = {
  'GET /api/user': {
    result:{
      id: 1,
      username: 'aaaaaaaaa',
      sex: 6
    },
    status:{
      code: 1001,
      msg: 'ok',
    }
  },
};

module.exports = delay(proxy, 200);