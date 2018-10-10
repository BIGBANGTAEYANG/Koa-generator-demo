const router = require('koa-router')()
const successReturnData = {status:'Success',code:1,msg:''};
const failureReturnData = {status:'Failure',code:0,msg:''};
const errorReturnData = {status:'Error',code:-1,msg:''};

router.get('/', async (ctx, next) => {
  await ctx.render('login')
})


router.get('/register', async (ctx, next) => {
    await ctx.render('register')
})


router.get('/forgot-password', async (ctx, next) => {
    await ctx.render('forgot-password')
})

router.post('/userLogin', async (ctx, next) => {
    var name = ctx.request.body.inputUsername || '',password = ctx.request.body.inputPassword || '';
    //登录判断
    if (name === 'admin' && password === '000000') {
        // 登录成功:
        successReturnData.msg = "登录成功";
        ctx.session.username = name;
        ctx.session.password = password;
        ctx.body = successReturnData;
    } else {
        // 登录失败:
        ctx.body = failureReturnData;
    }
})

module.exports = router