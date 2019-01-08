const basicAuth = require('basic-auth')

export default (req, res, next) => {
  const credentials = basicAuth(req)
  if (
    !credentials ||
    credentials.name !== 'admin' ||
    credentials.pass !== 'asdf1234'
  ) {
    res.statusCode = 401
    res.setHeader(
      'WWW-Authenticate',
      'Basic realm="Please enter username and password"'
    )
    return res.end()
  }
  next()
}
