import debug from 'debug'
import { getTodayDateUTC } from './Date'

export class Logger {
    private readonly module: string;
    private readonly logger: any;

    constructor(module: string) {
        this.module = module;
        this.logger = debug(this.module)
    }

    private baseLogger(type: 'info' | 'error', message: any) {
        return this.logger({
            timestamp: getTodayDateUTC('YYYY-MM-DD HH:mm:ss'),
            type,
            message
        })
    }

    info(message: any) {
        return this.baseLogger('info', message)
    }

    error(error: any) {
        return this.baseLogger('error', error)
    }
}