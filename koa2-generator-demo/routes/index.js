const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/charts', async (ctx, next) => {
  await ctx.render('charts', {
    title: 'Hello Koa 2!'
  })
})

router.get('/tables', async (ctx, next) => {
  await ctx.render('tables', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
