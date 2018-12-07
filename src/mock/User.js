const Mock = require('mockjs');
const Random = Mock.Random;

const proxy = {
  'GET /api/user/info': (req,res)=>{
    if(!req){
      console.error(req);
      return ;
    };
    return res.json({
      result:Mock.mock({
        'id|1-100': 1,
        username: Random.word(1,10),
        time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
      }),
      status:{
        code: 1001,
        msg: 'ok',
      }
    });
  },
};

module.exports = proxy;