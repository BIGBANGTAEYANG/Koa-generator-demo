// passport.js
const passport = require('koa-passport'),LocalStrategy = require('passport-local').Strategy


// 策略
passport.use(new LocalStrategy({
  // usernameField: 'email',
  // passwordField: 'passwd'
}, function(username, password, done) {
  var user = {id: 1, username: username, password: password}
  done(null,user)
}))

// serializeUser 在用户登录验证成功以后将会把用户的数据存储到 session 中
passport.serializeUser(function (user, done) {
  done(null,user)
})

// deserializeUser 在每次请求的时候将从 session 中读取用户对象
passport.deserializeUser(function (user, done) {
  return done(null,user)
})



module.exports = passport