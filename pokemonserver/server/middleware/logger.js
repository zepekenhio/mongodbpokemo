const logger = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`${req.method} ${req.originalUrl} ${now}`);
    next();
};

module.exports = logger;
