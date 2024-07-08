import { createUserJobs, reqEmailJobs } from "../models/loginModelJobs.js";

const raizServer = (req, res) => {
    res.send('Servidor está funcionando correctamente');
};

const createNewUserJobs = async (req, res) => {
    try {
        const { userJobs } = req.body;
        // Comprobando si el usuario existe
        const userjobsExist = await reqEmailJobs(userJobs);
        if (userjobsExist) {
            return res.status(400).json({ message: 'El correo ya existe en nuestros registros' });
        }
        const newUserJobs = await createUserJobs(userJobs);
        res.status(201).json({ userJobs: newUserJobs });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { raizServer, createNewUserJobs };
