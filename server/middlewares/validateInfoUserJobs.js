const validateInfoUserJobs = (req, res, next) => {
    const { userJobs } = req.body;
    if (!userJobs || !userJobs.email || !userJobs.password || !userJobs.rol || !userJobs.lenguage) {
        return res.status(400).json({ error: "el email, password, rol y lenguage deben ser ingresados" });
    }
    next();
};

export { validateInfoUserJobs };


