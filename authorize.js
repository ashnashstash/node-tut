const authorize = (req, res, next) => {
  const {user} = req.query
  if(user === 'anne') {
    req.user = {name : 'anne', id : 3}
    next()
  }
  else {
    res.status(401).send('unauthorized')
  }
}

module.exports = authorize