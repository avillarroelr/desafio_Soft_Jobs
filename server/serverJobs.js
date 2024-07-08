import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import figures from 'figures';
import loginRoutesJobs from './src/routes/loginRoutesJobs.js';
import userRoutesJobs from './src/routes/userRoutesJobs.js'; 
import logger from './middlewares/loginLoggerJobs.js';
import { loginExist } from './middlewares/loginVerifyUserJobs.js';

const crud = express();

const PORT = process.env.PORT || 3000;

crud.use(express.json());
crud.use(cors());
crud.use(logger);

crud.use('/', loginRoutesJobs);  
crud.use('/', userRoutesJobs);
crud.use('/', loginExist );

crud.listen(PORT, () => {
    console.log(chalk.green(`${figures.tick} ${chalk.bold('SERVIDOR CORRIENDO')} ${chalk.blue(figures.pointer)} ${chalk.yellow('http://localhost:' + PORT)}`));
    console.log(chalk.cyan(`${figures.star} ${chalk.bold('ESTADO:')} ${chalk.green('OK')}`));
    console.log(chalk.magenta(`${figures.info} ${chalk.bold('Esperando conexiones...')}`));
});

