// authMiddleware.js
const authMiddleware = (req, res, next) => {
  // Check if the user is authenticated (e.g., by checking session, tokens, etc.)
  if (req.session && req.session.userId) {
    return next(); // User is authenticated, allow access to the route
  } else {
    return res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated, deny access
  }
};

module.exports = authMiddleware;
