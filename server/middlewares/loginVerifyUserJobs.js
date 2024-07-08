import jwt from "jsonwebtoken";

const loginExist = async (req, res, next) => {
    try {
        validateTokenHeaderJobs(req);
        const tokenJobs = req.header('Authorization').split(' ')[1];
        const tokenData = await verifyTokenUserJobs(tokenJobs);
        req.user = tokenData;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ error: error.message });
    }
}

const verifyTokenUserJobs = async (tokenJobs) => {
    try {
        const decodeToken = jwt.verify(tokenJobs, process.env.SECRETKEYWORD);
        return decodeToken;
    } catch (error) {
        throw new Error("El token no es válido");
    }
}

const validateTokenHeaderJobs = (req) => {
    if (!req.header('Authorization')) {
        throw new Error("El token no fue encontrado");
    }
}

export { loginExist };

