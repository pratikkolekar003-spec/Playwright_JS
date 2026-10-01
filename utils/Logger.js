import fs from 'fs';
import path from 'path';

export class Logger {
    static getLogFile() {
        // Create logs directory
        const logDirectory = path.join(process.cwd(), 'logs');

        if (!fs.existsSync(logDirectory)) {
            fs.mkdirSync(logDirectory, { recursive: true });
        }

        // Get today's date
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const date = `${year}-${month} -${day}`;
        // Create today's log file name
        const logFileName = `execution - ${date}.log`;
        return path.join(logDirectory, logFileName);
    }
    static write(level, message) {
        // Get today's log file
        const logFile = this.getLogFile();

        // Current timestamp
        const timestamp = new Date().toLocaleString();

        // Create log message
        const logMessage =
            `[${ timestamp }][${ level }]${ message }\n`;

        // Append to today's log file
        fs.appendFileSync(logFile, logMessage);

        // Also print in console
        console.log(logMessage.trim());
    }

    static info(message) {
        this.write('INFO', message);
    }

    static debug(message) {
        this.write('DEBUG', message);
    }

    static warn(message) {
        this.write('WARN', message);
    }

    static error(message) {
        this.write('ERROR', message);
    }
}