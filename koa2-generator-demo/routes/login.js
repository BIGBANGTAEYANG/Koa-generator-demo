const router = require('koa-router')()
const successReturnData = {status:'Success',code:1,msg:''};
const failureReturnData = {status:'Failure',code:0,msg:''};
const errorReturnData = {status:'Error',code:-1,msg:''};
//passport
const passport = require('../passport')

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
    passport.authenticate('local',function(err, user, info, status){
        if (user!=null) {
            console.log(user);
            successReturnData.msg=info;
            ctx.body = successReturnData
            ctx.login(user)
        } else {
            failureReturnData.msg=info
            ctx.body=failureReturnData
        }
    })(ctx, next)
})


/**
 * 认证登出
 */
router.get('/userLogout',  async (ctx, next) => {
    ctx.body = {auth: ctx.isAuthenticated(), user: ctx.state.user}
    ctx.logout()
})

module.exports = router