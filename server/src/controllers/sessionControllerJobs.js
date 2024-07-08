import { reqEmailJobs } from "../models/loginModelJobs.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUserJobs = async (req, res) => {
    const { userJobs } = req.body;
    try {
        const findUserJobs = await reqEmailJobs(userJobs);
        if (!findUserJobs) {
            console.log("El usuario no existe");
            return res.status(404).json({ error: "El usuario no existe" });
        }

        const passwordValid = bcrypt.compareSync(
            userJobs.password,
            findUserJobs.password
        );
        if (!passwordValid) {
            console.log("La contraseña no es correcta");
            return res.status(401).json({ error: "La contraseña no es correcta" });
        }

        const { email, rol } = findUserJobs;
        const tokenJobs = await newTokenJobs(email);
        res.status(200).json({
            message: `Bienvenido, ${rol}, has iniciado sesión`,
            code: 200,
            tokenJobs,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const newTokenJobs = async (email) => {
    const tokenJobs = jwt.sign({ email }, process.env.SECRETKEYWORD, {
        expiresIn: '1m',
    });
    return tokenJobs;
};

export { loginUserJobs };

