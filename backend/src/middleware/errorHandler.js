/**
 * Centralized error-handling middleware.
 * Must be registered LAST in the Express middleware chain.
 *
 * @param {Error} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
};

export default errorHandler;
