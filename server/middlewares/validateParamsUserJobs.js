const validateParamsUserJobs = (req, res, next) => {
    const { userJobs } = req.body;
    if (!userJobs.email || !userJobs.password) {
        return res.status(400).json({ error: "Falta el email o la password" });
    }
    next();
};

export { validateParamsUserJobs };
