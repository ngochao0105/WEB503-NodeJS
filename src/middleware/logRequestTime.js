const logRequestTime = (req, res, next) => {
  console.log(`Request received at: ${new Date().toLocaleTimeString()} - URL: ${req.url}`);
  next();
};

export default logRequestTime;