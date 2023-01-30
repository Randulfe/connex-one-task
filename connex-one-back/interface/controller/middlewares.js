const authorizationMiddleware = function(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken || authToken!=='mysecrettoken') {
    res.status(403).send({message: 'Not authorised'});
  }
  next();
};

module.exports = authorizationMiddleware;
