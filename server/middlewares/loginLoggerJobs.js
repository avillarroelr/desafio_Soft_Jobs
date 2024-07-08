import chalk from 'chalk';

const logger = (req, res, next) => {
    console.log(chalk.blue(`Consulta a la ruta: ${chalk.green(req.method)} ${chalk.yellow(req.originalUrl)}`));
    next();
};

export default logger;