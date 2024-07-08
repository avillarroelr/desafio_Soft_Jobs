import pool from "../../database/dataconfig.js";
import bcryptjs from "bcryptjs";

const createUserJobs = async ({ email, password, rol, lenguage }) => {
    const encryptPassword = bcryptjs.hashSync(password, 10);
    const SQLquery = {
        text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [email, encryptPassword, rol, lenguage],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
};

const reqEmailJobs = async ({ email }) => {
    const SQLquery = {
        text: "SELECT * FROM usuarios WHERE email = $1",
        values: [email],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
}

export { createUserJobs, reqEmailJobs };



