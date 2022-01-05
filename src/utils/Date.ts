import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export const getTodayDateUTC = (format: string) => dayjs.utc().format(format);