import day from 'dayjs';

export default function(value, format) {
    return day(String(value || '')).format(format);
}
