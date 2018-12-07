const Delay = require('mocker-api/utils/delay');
const Mock = require('mockjs');
const Random = Mock.Random;

const proxy = {
  'GET /api/user': (req,res)=>{
    if(!req){
      console.error(req);
      return ;
    };
    return res.json({
      result:{
        id: 1,
        username: 'aaaaaaaaa',
        sex: 6,
        time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
      },
      status:{
        code: 1001,
        msg: 'ok',
      }
    });
  },
};

module.exports = Delay(proxy, 200);